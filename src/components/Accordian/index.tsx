import { useState } from 'react'
import style from "./style.module.scss"

interface Props {
    title: string
    items: { title: string, link: string }[]
}

const Accordian = ({ title, items }: Props) => {
    const [show, setShow] = useState(false)
    return (
        <div className={style.accordian}>
            <div className={style.header}>
                <h2>{title}</h2>
                <div style={{ display: "grid", placeItems: "center", transform: show ? "rotate(180deg)" : "" }} onClick={() => setShow(!show)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={20} height={20}>
                        <path color='gray' d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                </div>
            </div>
            <div className={style.content} style={{ display: show ? "inherit" : "none" }}>
                <ul>
                    {items.map((item, index) => <li key={index}>
                        <a target="_blank" rel="noreferrer" href={item.link}>{item.title}</a>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Accordian