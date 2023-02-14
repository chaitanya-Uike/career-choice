import { useState, useContext } from "react"
import QuestionBar from "../../components/QuestionBar"
import questionsJson from "./questions.json"
import MCQContainer from "../../components/MCQ"
import style from "./style.module.scss"
import SVGIcons from "../../components/SVGIcons"
import { AppContext, appContextType } from "../../App"
import { useNavigate } from "react-router-dom"

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
    const { setResult } = useContext(AppContext) as appContextType
    const navigate = useNavigate()


    const allQuestionsSolved = !selectedOptions.some(value => value === -1)

    function goToPrev() {
        setActiveQuestion(prev => {
            if (activeQuestion !== 0)
                return prev - 1
            return prev
        })
    }

    function goToNext() {
        setActiveQuestion(prev => {
            if (activeQuestion !== questions.length - 1)
                return prev + 1
            return prev
        })
    }

    return (
        <div className={style.mainContainer}>
            <QuestionBar
                numberOfQuestion={questions.length}
                setActiveQuestion={setActiveQuestion}
                activeQuestion={activeQuestion}
                selectedOptions={selectedOptions}
            />
            <div className={style.navButtonsContainer}>
                <button className={style.navButtons} onClick={goToPrev}>
                    <SVGIcons.ArrowLeft width={20} height={20} color="green" />
                    Prev</button>
                <button className={style.navButtons} onClick={goToNext}>
                    Next
                    <SVGIcons.ArrowRight width={20} height={20} color="green" />
                </button>
            </div>
            <MCQContainer mcq={questions[activeQuestion]} questionNo={activeQuestion} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />

            {allQuestionsSolved ?
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

                    setResult({ ...result })
                    navigate("/result")
                }}>Finish Test</button> :
                selectedOptions[activeQuestion] !== -1 && <button style={{ marginTop: '30px' }} className={style.navButtons} onClick={goToNext}>Submit</button>
            }
        </div>
    )
}

export default Test