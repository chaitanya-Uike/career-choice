import style from "./style.module.scss";
import GoogleButton from "react-google-button";
import { UserAuth, AuthContextType } from "../../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const { googleSignIn, user } = UserAuth() as AuthContextType;
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.mainContainer}>
      <h1 style={{ fontSize: 50 }}>Career Choice</h1>
      <h1>Sign In</h1>
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
}
