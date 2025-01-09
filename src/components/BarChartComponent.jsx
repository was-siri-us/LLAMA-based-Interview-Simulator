import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';
import axios from "axios";
import { useEffect, useState } from "react";

const BarChartComponent = () => {

    const [checkArr, setcheckArr] = useState([])

    const getData = async () => {
        const arr = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/performance/`);
        setcheckArr(arr.data.performance)
        console.log(checkArr)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <p className='text-2xl'>Performance</p>
                </CardTitle>
                <hr />
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={checkArr} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <XAxis
                            dataKey="domain"
                            tick={{ fontSize: 10 }}  // Adjust the font size here
                        />
                        <YAxis domain={[0, 10]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
                        {/* <Tooltip /> */}
                        <Bar dataKey="performance" fill="#ff8000" />
                        <ReferenceLine y={7} stroke="black" strokeOpacity={0.5} strokeWidth={3} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}

export default BarChartComponent;
