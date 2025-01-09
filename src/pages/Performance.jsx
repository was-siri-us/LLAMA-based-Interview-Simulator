import CardComponent2 from '@/components/CardComponent2';
import BarChartComponent from '@/components/BarChartComponent';
import Navbar from '@/components/Navbar';

const Performance = () => {
    const dd = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, dignissimos ? Molestias error cum incidunt quam eaque voluptate corrupti maiores vitae totam quae ? Officia, tenetur vel ? Nobis amet at, dolores dolore cupiditate non minima expedita";

    return (
        <>
            <Navbar />
            <div className="flex justify-evenly gap-3 m-5 h-[513px]">
                <div className='w-[70%]'>
                    <BarChartComponent />
                </div>
                <div className='flex items-stretch w-[30%]' >
                    <CardComponent2 title="Card Title" description={dd} />
                </div>
            </div>
        </>
    )
}

export default Performance
