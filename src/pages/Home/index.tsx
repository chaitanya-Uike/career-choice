import style from "./style.module.scss"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className={style.mainContainer}>
            <Link className={style.getStartedBtn} to="/test">Get Started</Link>
        </div>
    )
}

export default Home