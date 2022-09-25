import React, { useState, useContext, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import UserContext from "../AuthContext/AuthContext";
import config from "../../config";
import { RegistrationContext } from "./RegistrationContext";
import { createUserDocumentFromAuth } from "../../utils/firebase.utils";

type Inputs = {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

function Registration() {
  const auth = getAuth(config);
  const { user } = useContext(RegistrationContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const value = useContext(UserContext);

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const userAuth = userCredential.user;
        await createUserDocumentFromAuth(userAuth, user);

        alert("The user was successfully created");
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // ..
        alert(errorCode);
      });
  };

  return (
    <div>
      <h1>Registration</h1>
      <h2>Email</h2>
      <input
        type={"email"}
        placeholder="Please enter your email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <h2>Password</h2>
      <input
        type={"password"}
        placeholder="Please enter your password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
}

export default Registration;
