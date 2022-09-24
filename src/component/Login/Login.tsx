import React from "react";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styles from "./Login.module.css";
import config from "../../config";
import login from "../../assets/login.jpg";

function Login(){
    const auth = getAuth(config);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert("This user is successfully signed in")
    // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode)
    });
    }
    return (
        <>
        
        <div className={styles["container"]}>
            <img className={styles["login-img"]} src={login} />
            <div className={styles["login-section"]}>
                <p className={styles["description"]}>Welcome back, please login into your account</p>
                <h2 className={styles["title"]}>Email</h2>
                <input className={styles["input"]} type={"email"} placeholder="please enter your email" onChange={(e) => setEmail(e.target.value)}/>
                <h2 className={styles["title"]}>Password</h2>
                <input className={styles["input"]} type={"password"} placeholder="please enter your password" onChange={(e) => setPassword(e.target.value)}/>
                <button className={styles["button"]} onClick={signIn}>Sign In</button>
            </div>
        </div>
        </>
    );
}

export default Login; 
