import style from "./style.module.scss"
import SVGIcons from "../SVGIcons"

interface Props {
    isChecked: boolean
    index: number,
    onClickHandler: (index: number) => void
}

function RadioButton({ isChecked, index, onClickHandler }: Props) {
    return (
        <div className={style.radioBtn} onClick={() => { onClickHandler(index) }}>
            {isChecked && <SVGIcons.Tick width={20} height={20} color="green" />}
        </div>
    )
}

export default RadioButton