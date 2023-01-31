import { MCQ } from "../../pages/Test"
import style from "./style.module.css"

interface Props {
    mcq: MCQ
}

const MCQContainer = ({ mcq }: Props) => {
    return (
        <div className={style.mcqContainer}>
            <p>{mcq.question}</p>
            <div>
                {mcq.options.map((option, index) => {
                    return (
                        <div key={index} className={style.optionContainer}>
                            <input type="radio" />
                            <p>{option}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MCQContainer