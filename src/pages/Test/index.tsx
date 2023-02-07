import { useState } from "react"
import QuestionBar from "../../components/QuestionBar"
import questionsJson from "./questions.json"
import MCQContainer from "../../components/MCQ"
import style from "./style.module.scss"
import SVGIcons from "../../components/SVGIcons"
import { CLIENT_RENEG_LIMIT } from "tls"

export interface MCQ {
    question: string,
    options: string[],
    field: string
}

interface QuestionMapping {
    [field: string]: number[]
}

interface Scores {
    [field: string]: number
}

const Test = () => {
    const [questions] = useState<MCQ[]>(questionsJson.questions)
    const [activeQuestion, setActiveQuestion] = useState<number>(0)
    const [selectedOptions, setSelectedOptions] = useState<number[]>(new Array(questions.length).fill(-1))

    const allQuestionsSolved = !selectedOptions.some(value => value === -1)

    return (
        <div className={style.mainContainer}>
            <QuestionBar
                numberOfQuestion={questions.length}
                setActiveQuestion={setActiveQuestion}
                activeQuestion={activeQuestion}
                selectedOptions={selectedOptions}
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
            <MCQContainer mcq={questions[activeQuestion]} questionNo={activeQuestion} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />

            {allQuestionsSolved &&
                <button className={style.submitBtn} onClick={() => {
                    const questionMapping: QuestionMapping = {}

                    questions.forEach((question, index) => {
                        if (!questionMapping[question.field])
                            questionMapping[question.field] = [selectedOptions[index]]
                        else
                            questionMapping[question.field].push(selectedOptions[index])
                    })

                    const result: Scores = {}

                    for (const key in questionMapping) {
                        const data = questionMapping[key]
                        result[key] = data.reduce((acc, value) => acc + (100 - value * 25), 0) / data.length;
                    }

                    console.log(result)

                }}>Finish Test</button>
            }
        </div>
    )
}

export default Test