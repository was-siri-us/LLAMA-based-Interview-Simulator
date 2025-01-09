

const QuestionComponent = ({ question, response, grade, remark }) => {
    return (
        <div className="flex flex-col gap-3 mb-5">
            <div className="flex items-center gap-2">
                <p className=" text-lg "><span className="italic font-bold">Question:</span> {question} </p>
            </div>
            <div className="flex items-center gap-2">
                <p className=" text-lg "><span className="italic font-bold">Response:</span> {response} </p>
            </div>
            <div className="flex items-center gap-2">
                <p className=" text-lg "><span className="italic font-bold">Grade:</span> {grade} </p>
            </div>
            <div className="flex items-center gap-2">
                <p className=" text-lg "><span className="italic font-bold">Remark:</span> {remark} </p>
            </div><hr />
        </div>
    )
}

export default QuestionComponent
