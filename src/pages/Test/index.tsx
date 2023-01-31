import { useState } from "react"
import QuestionBar from "../../components/QuestionBar"
import questionsJson from "./questions.json"
import MCQContainer from "../../components/MCQ"

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
            <button onClick={() => {
                setActiveQuestion(prev => {
                    if (activeQuestion !== 0)
                        return prev - 1
                    return prev
                })
            }}>Prev</button>
            <button onClick={() => {
                setActiveQuestion(prev => {
                    if (activeQuestion !== questions.length - 1)
                        return prev + 1
                    return prev
                })
            }

            }>Next</button>
            <MCQContainer mcq={questions[activeQuestion]} />
        </div>
    )
}

export default Test