import { createContext, useState, Dispatch, SetStateAction } from "react"
import { Outlet } from 'react-router-dom'
import style from "./app.module.scss"

interface Hash {
    [key: string]: number
}

export type appContextType = {
    result: Hash,
    setResult: Dispatch<SetStateAction<Hash>>
}


export const AppContext = createContext<appContextType | null>(null)

const App = () => {
    const [result, setResult] = useState<Hash>({})
    return (
        <div>
            <div className={style.header}>
                <h1>Career Survey</h1>
            </div>
            <AppContext.Provider value={{ result, setResult }}>
                <Outlet />
            </AppContext.Provider>
        </div>
    )
}

export default App