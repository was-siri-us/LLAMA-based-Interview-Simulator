// TopicDetail.js
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Navbar from './Navbar';





export default function TopicDetail() {
    const location = useLocation();
    const { title, description, tags } = location.state || {};
    const [jobDescription, setJobDescription] = React.useState('');

    const handleChange = (e) => {
        setJobDescription(e.target.value);
    }

    useEffect(() => {
        setJobDescription(description);
    }, [description]);

    return (
        <>
            <Navbar />
            <div className='w-full h-full flex justify-center mt-4'>
                <Card className='w-[90%]'>
                    <CardHeader>
                        <CardTitle className='text-2xl font-bold'>{title}</CardTitle>
                        <div className='mt-3 flex gap-1'>
                            {tags && tags.map(
                                (info, index) => {
                                    return (
                                        <Badge key={index} variant="outline">{info}</Badge>
                                    )
                                }
                            )}
                        </div>
                    </CardHeader>
                    <CardContent>
                        <textarea className='w-[100%] h-[400px] border-2 rounded-lg border-black/30 p-5' value={jobDescription} onChange={handleChange}></textarea>
                    </CardContent>
                    <CardFooter className='w-full flex justify-end'>
                        <Button variant='outline'>
                            <Link to={'/interview'} state={{ 'title': title, 'jobDescription': jobDescription }}>Start Interview</Link>
                        </Button>
                    </CardFooter>
                </Card>

            </div>
        </>
    )
}
