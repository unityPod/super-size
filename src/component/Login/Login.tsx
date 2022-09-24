import React from "react";
import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import UserContext from "../AuthContext/AuthContext";
import styles from "./Login.module.css";
import config from "../../config";
import login from "../../assets/login.jpg";
import LoginImg from "../../assets/login-img.png";

function Login(){
    const auth = getAuth(config);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();
    const value = useContext(UserContext);


    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert("This user is successfully signed in")
        navigate("/home")
    // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode)
    });
    }

    useEffect(() => {
        if (value.user) {
            navigate("/home")
        }
    }, [])


    return (
        <>
        <div className={styles["container"]}>
            <div className={styles["inner-container"]}>
                <h2 className={styles["title"]}>Super Size</h2>
                <h1 className="font-primary text-[16px] leading-8">Sign In to this very serious fitness app</h1>
                <h2 className="font-primary text-[16px] leading-8">If you don't have an account <Link to="/signup">Register Now</Link></h2>
            </div>
            <img className={styles["login-img"]} src={LoginImg}/>
            <div className={styles["inner-container"]}>
                <p className="font-primary font-bold text-[16px] leading-8">Welcome back, please login into your account</p>
                <h2 className="font-primary text-[16px] leading-8">Email</h2>
                <input className={styles["input"]} type={"email"} placeholder="please enter your email" onChange={(e) => setEmail(e.target.value)}/>
                <h2 className="font-primary text-[16px] leading-5">Password</h2>
                <input className={styles["input"]} type={"password"} placeholder="please enter your password" onChange={(e) => setPassword(e.target.value)}/>
                <button className={styles["button"]} onClick={signIn}>Sign In</button>
            </div>
        </div>
        </>
    );
}

export default Login; 
