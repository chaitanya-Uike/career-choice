import style from "./style.module.scss"

const Home = () => {
    return (
        <div className={style.mainContainer}>
            <div className={style.section}>
                <h1>Welcome</h1>
                <a className={style.getStartedBtn} href="/test">Get Started</a>
            </div>
        </div>
    )
}

export default Home