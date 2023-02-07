import { Dispatch, SetStateAction } from "react"
import { MCQ } from "../../pages/Test"
import style from "./style.module.scss"
import RadioButton from "../RadioButton"

interface Props {
    mcq: MCQ,
    questionNo: number,
    selectedOptions: number[],
    setSelectedOptions: Dispatch<SetStateAction<number[]>>
}

const MCQContainer = ({ mcq, questionNo, selectedOptions, setSelectedOptions }: Props) => {
    return (
        <div className={style.mcqContainer}>
            <p className={style.question}>{`${questionNo + 1}) ${mcq.question}`}</p>
            <div className={style.optionsContainer}>
                {mcq.options.map((option, index) => {
                    return (
                        <div key={index} className={style.optionContainer}>
                            <RadioButton onClickHandler={(index) => {
                                if (selectedOptions[questionNo] === index)
                                    selectedOptions[questionNo] = -1
                                else
                                    selectedOptions[questionNo] = index

                                setSelectedOptions([...selectedOptions])
                            }} isChecked={selectedOptions[questionNo] === index} index={index} />
                            <p>{option}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MCQContainer