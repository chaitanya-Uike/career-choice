import { Dispatch, SetStateAction, useLayoutEffect, useRef } from "react"
import style from "./style.module.scss"

interface Props {
    numberOfQuestion: number
    activeQuestion: number
    setActiveQuestion: Dispatch<SetStateAction<number>>
}

const QuestionBar = ({ numberOfQuestion, activeQuestion, setActiveQuestion }: Props) => {

    const activeBlobRef = useRef<HTMLDivElement | null>(null)

    useLayoutEffect(() => {
        if (activeBlobRef.current)
            activeBlobRef.current.scrollIntoView()
    }, [activeQuestion])

    return (
        <div className={style.questionBar}>
            {[...Array(numberOfQuestion).keys()].map(questionNo => {
                return (
                    <div ref={el => {
                        if (activeQuestion === questionNo)
                            activeBlobRef.current = el
                    }}
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