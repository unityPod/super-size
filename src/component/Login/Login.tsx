import React from "react";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import UserContext from "../AuthContext/AuthContext";
// import styles from "./Login.module.css";
import config from "../../config";
import login from "../../assets/login.jpg";

function Login(){
    const navigate = useNavigate();
    const auth = getAuth(config);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const value = useContext(UserContext)

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

    useEffect(() => {
        if (value.user) {
            navigate("/home")
        }
    }, [])

    return (
        <>
        
        <div>
            <img/>
            <div>
                <p>Welcome back, please login into your account</p>
                <h2>Email</h2>
                <input type={"email"} placeholder="please enter your email" onChange={(e) => setEmail(e.target.value)}/>
                <h2>Password</h2>
                <input type={"password"} placeholder="please enter your password" onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={signIn}>Sign In</button>
            </div>
        </div>
        </>
    );
}

export default Login; 
