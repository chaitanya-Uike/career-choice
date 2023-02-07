import style from "./style.module.scss"
import SVGIcons from "../SVGIcons"

interface Props {
    isChecked: boolean
    index: number
}

function RadioButton({ isChecked }: Props) {
    return (
        <div className={style.radioBtn}>
            {isChecked && <SVGIcons.Tick width={20} height={20} color="green" />}
        </div>
    )
}

export default RadioButton