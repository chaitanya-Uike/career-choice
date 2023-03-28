import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { Outlet } from "react-router-dom";
import style from "./app.module.scss";
import { UserAuth, AuthContextType } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

interface Hash {
  [key: string]: number;
}

export type appContextType = {
  result: Hash;
  setResult: Dispatch<SetStateAction<Hash>>;
};

export const AppContext = createContext<appContextType | null>(null);

const App = () => {
  const { user, logOut } = UserAuth() as AuthContextType;
  const [result, setResult] = useState<Hash>({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/signin");
  }, [user]);

  return (
    <div className={style.mainContainer}>
      <div className={style.home}>
        <div className={style.header}>
          <h1>Career Survey</h1>
          <p style={{ cursor: "pointer", fontWeight: 600 }} onClick={logOut}>
            Logout
          </p>
        </div>
        <AppContext.Provider value={{ result, setResult }}>
          <Outlet />
        </AppContext.Provider>
      </div>
    </div>
  );
};

export default App;
