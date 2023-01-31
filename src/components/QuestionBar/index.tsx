import { Dispatch, SetStateAction } from "react"
import style from "./style.module.css"

interface Props {
    numberOfQuestion: number
    activeQuestion: number
    setActiveQuestion: Dispatch<SetStateAction<number>>
}

const QuestionBar = ({ numberOfQuestion, activeQuestion, setActiveQuestion }: Props) => {
    return (
        <div className={style.questionBar}>
            {[...Array(numberOfQuestion).keys()].map(questionNo => {
                return (
                    <div
                        className={`${style.questionBlob} ${activeQuestion === questionNo ? style.activeQuestion : ""}`}
                        key={questionNo}
                        onClick={() => {
                            setActiveQuestion(questionNo)
                        }}
                    >
                        {questionNo + 1}
                    </div>
                )
            })}
        </div>
    )
}

export default QuestionBar