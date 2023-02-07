import { MCQ } from "../../pages/Test"
import style from "./style.module.scss"
import RadioButton from "../RadioButton"

interface Props {
    mcq: MCQ,
    questionNo: number
}

const MCQContainer = ({ mcq, questionNo }: Props) => {
    return (
        <div className={style.mcqContainer}>
            <p className={style.question}>{`${questionNo}) ${mcq.question}`}</p>
            <div className={style.optionsContainer}>
                {mcq.options.map((option, index) => {
                    return (
                        <div key={index} className={style.optionContainer}>
                            <RadioButton isChecked={true} index={index} />
                            <p>{option}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MCQContainer