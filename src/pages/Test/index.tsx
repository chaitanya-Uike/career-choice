import { useState } from "react"
import QuestionBar from "../../components/QuestionBar"
import questionsJson from "./questions.json"
import MCQContainer from "../../components/MCQ"
import style from "./style.module.scss"
import SVGIcons from "../../components/SVGIcons"

export interface MCQ {
    question: string,
    options: string[]
}

const Test = () => {
    const [questions] = useState<MCQ[]>(questionsJson.questions)
    const [activeQuestion, setActiveQuestion] = useState<number>(0)

    return (
        <div>
            <QuestionBar
                numberOfQuestion={questions.length}
                setActiveQuestion={setActiveQuestion}
                activeQuestion={activeQuestion}
            />
            <div className={style.navButtonsContainer}>
                <button className={style.navButtons} onClick={() => {
                    setActiveQuestion(prev => {
                        if (activeQuestion !== 0)
                            return prev - 1
                        return prev
                    })
                }}>
                    <SVGIcons.ArrowLeft width={20} height={20} color="green" />
                    Prev</button>
                <button className={style.navButtons} onClick={() => {
                    setActiveQuestion(prev => {
                        if (activeQuestion !== questions.length - 1)
                            return prev + 1
                        return prev
                    })
                }

                }>
                    Next
                    <SVGIcons.ArrowRight width={20} height={20} color="green" />
                </button>
            </div>
            <MCQContainer mcq={questions[activeQuestion]} questionNo={activeQuestion + 1} />
        </div>
    )
}

export default Test