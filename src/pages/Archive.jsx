import Navbar from "@/components/Navbar";
import QuestionComponent from "@/components/QuestionComponent"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge";


const Archive = () => {

    const array = [
        {
            topic: "Check This",
            date: "2021-09-04",
            questions: [
                { question: "Is it accessible?", response: "Yes", grade: "A", remark: "Good job!" },
                { question: "Is it responsive?", response: "Yes", grade: "A", remark: "Good job!" },
                { question: "Is it performant?", response: "Yes", grade: "A", remark: "Good job!" }
            ]
        },
        {
            topic: "Check That",
            date: "2021-09-01",
            questions: [
                { question: "Is it accessible?", response: "No", grade: "B", remark: "Needs improvement!" },
                { question: "Is it responsive?", response: "Yes", grade: "A", remark: "Good job!" },
                { question: "Is it performant?", response: "Yes", grade: "A", remark: "Good job!" }
            ]
        }
    ];

    return (
        <>
            <Navbar />
            <div className="mx-32 my-10 ">
                <h1 className="text-2xl font-bold mb-4">Previous Interviews</h1>
                <Accordion className="border px-5 rounded-lg" type="single" collapsible>
                    {array.map((item, index) => {
                        return <AccordionItem key={index} value={index + 1}>
                            <AccordionTrigger>
                                <div className=" w-full flex justify-between">
                                    <p className="text-2xl">{item.topic}</p>
                                    <Badge variant="outline">{item.date}</Badge>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                {item.questions.map((q, ind) => (
                                    <QuestionComponent key={ind} {...q} />
                                ))}

                            </AccordionContent>
                        </AccordionItem>
                    })}
                </Accordion>
            </div></>
    )
}

export default Archive
