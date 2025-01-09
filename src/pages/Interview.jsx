import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


var count = 0;



const API_URL = import.meta.env.VITE_API_URL;
const Interview = () => {
    const location = useLocation();
    const { title, jobDescription } = location.state || {};
    const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();
    const prompt = `You are an AI Interviewer, ask the user a question according to the following job description: ${jobDescription}, Restrict your replies to a single question, Grade each answer of the user on a scale of 1-10 on how accurate it is, if the user isn't able to answer properly then try asking other questions and grade it 0. All output must be in valid JSON. Output must be in valid JSON like the following example {"grade": 7, "next_question": "What frameworks have you worked on?"},{"grade": 7, "next_question": "What projects have you worked on?"}. Output must include only JSON with keys grade and next-question`;
    const navigate = useNavigate();


    function extractJSONFromText(text) {
        var pattern = /{.*?}/;
        var match = text.match(pattern);
        if (match) {
            var jsonObject = match[0];
            return jsonObject;
        } else {
            return null;
        }
    }
    async function fetchQuestion(input) {
        console.log(input);
        try {
            const response = await fetch(
                API_URL + "/ask",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(input),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error("Fetch error: ", error);
        }
    }




    const [question, setQuestion] = useState('');
    const questions = useRef([]);
    const answers = useRef([]);
    const grades = useRef([]);
    const input_message = useRef([]);

    useEffect(() => {
        async function fetchQuestionFirst(input) {
            console.log(input);
            try {
                const response = await fetch(
                    API_URL + "/ask",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(input),
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                var data = await response.json();
                console.log(data);
                data = JSON.parse(data);
                setQuestion(data["next_question"]);
                questions.current.push(data["next_question"]);
                input_message.current.push({
                    role: "assistant",
                    content: data["next_question"],
                });


            } catch (error) {
                console.error("Fetch error: ", error);
            }
        }
        input_message.current.push({ role: "system", content: prompt });
        var input = { messages: input_message.current };
        fetchQuestionFirst(input);
    }, [])


    // async function nextQuestion() {
    //     console.log("next question");
    //     input_message.push({ role: "user", content: ans });
    //     var input = { input_message: input_message };
    //     console.log(input);

    //     var response = await fetchQuestion(input);
    //     response = JSON.parse(response["reply"]);
    //     question.innerHTML = response["next_question"];
    //     input_message.push({
    //         role: "assistant",
    //         content: response["next_question"],
    //     });
    //     console.log(response["grade"]);
    //     grade += Number(response["grade"]);
    // }




    const handleReset = () => {
        resetTranscript()
    }

    const submitTranscript = async () => {
        SpeechRecognition.stopListening();
        console.log(transcript)
        input_message.current.push({ role: "user", content: transcript});

        answers.current.push(transcript);

        var input = { messages : input_message.current };
        console.log(input);
        var response = await fetchQuestion(input);
        console.log("Response: "+response);
        response = JSON.parse(response);
        setQuestion(response["next_question"]);
        input_message.current.push({
            role: "assistant",
            content: response["next_question"],
        });
        

        handleReset();
        count+=1;
        grades.current.push(response["grade"]);
        if(count==3){
            navigate('/result', {state: {grades: grades.current, questions: questions.current, answers: answers.current,history: input_message.current}});
            return;
        }
        questions.current.push(response["next_question"]);
    }
    if (!browserSupportsSpeechRecognition) {
        console.log("hello")
        return null
    }
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    return (
        <>
            <Navbar />
            <div className='m-5 h-[95%]'>
                <div className='h-[90%] p-10'>

                    <Card style={{ position: 'relative' }} className='h-[100%]'>
                        <CardHeader>
                            <CardTitle className='text-2xl font-bold'>{title}</CardTitle>
                        </CardHeader>
                        <hr />
                        <CardContent>
                            <div className="text-center mt-10 text-xl">
                                {question}
                            </div>
                            <div className="flex justify-center">
                                <textarea className='w-[70%] h-[200px] mt-10 border-2 border-slate rounded-lg' value={transcript} readOnly></textarea>
                            </div>

                        </CardContent>
                        <CardFooter className='h-[75px] flex flex-col  justify-end items-start '>
                            <div className='w-full flex justify-center'>
                                <div className=' w-[40%] flex items-center justify-between mt-5'>
                                    <Button className='w-[100px]' onClick={startListening}>Start Listening</Button>
                                    <Button className='w-[100px]' onClick={SpeechRecognition.stopListening}>Stop Listening</Button>
                                    <Button className='w-[100px]' onClick={submitTranscript}>Submit</Button>
                                    <Button className='w-[100px]' onClick={handleReset}>Reset</Button>
                                </div>

                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Interview
