import React, { useState, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, EmailAuthCredential, sendSignInLinkToEmail  } from "firebase/auth";
import config from "../../config";

type Inputs = {
    username: string;   
    email: string; 
    password: string; 
    firstName: string; 
    lastName: string; 
}

function Registration(){
    const auth = getAuth(config);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function signUp(){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          alert("The user was successfully created")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          // ..
          alert(errorCode);
        });
    }

    // const value = useContext(UserContext)
    // useEffect(() => {
    //   if (value.user){
    //     navigate("/home")
    //   }
    // })

    return (
        <div>
            <h1>Registration</h1>
            <h2>Email</h2>
            <input type={"email"} placeholder="Please enter your email" onChange={(e) => setEmail(e.target.value)}></input>
            <h2>Password</h2>
            <input type={"password"} placeholder="Please enter your password" onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={signUp}></button>
        </div>
    )
}

export default Registration; 