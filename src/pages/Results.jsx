import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import { useUser } from "@clerk/clerk-react";
import axios from 'axios';

const Results = () => {
    const { user } = useUser();
    const location = useLocation();
    const { questions, answers, grades, history } = location.state;
    useEffect(()=>{
        async function save() {
            grades.map((ind,grade)=>{
                history.grade = grades[ind];
            });
            const {data} = await axios.post("http://localhost:3000/api/interview/save",{userId: user.id, conversation: history});
            console.log(user.id);
            console.log(data);
        }
        save();
    })
    return (
        <>
            <Navbar />
            <div className="w-full mt-[3rem] mb-[3rem] flex justify-center items-center">
                <Card style={{ position: 'relative' }} className='p-10 w-5/6 mb-[3rem]' >
                    <CardHeader>
                        <CardTitle className='flex flex-col items-center justify-center'>
                            <img src={user.imageUrl} className="rounded-full size-[7rem]"></img>
                            <p className="mt-5 ">{user.fullName}</p>
                        </CardTitle>
                    </CardHeader>
                    {/* <hr /> */}
                    <CardContent>
                        {
                            questions.map((question, index) => {
                                return (
                                    <div key={index} className='flex flex-col mb-4'>
                                        <div className="flex flex-row justify-between">
                                            <p className='text-sm font-bold w-[90%]'>Q. {question}</p>
                                            <p className="text-muted-foreground text-sm text-end">Grade: {grades[index]}</p>
                                        </div>
                                        <p className='text-sm w-[90%]'>A. {answers[index]}</p>
                                        {index != questions.length - 1 && (<hr />)}
                                    </div>
                                )
                            })
                        }
                    </CardContent>
                    <CardFooter className='h-[75px] flex flex-col  justify-end items-start '>
                        <div className='mb-2'>

                        </div>
                    </CardFooter>
                </Card>

            </div>
        </>

    )
}

export default Results