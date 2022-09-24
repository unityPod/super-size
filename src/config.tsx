import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBKf7ZmuyKXOsIJysuRTh-0CPgd8AlfZJY",
  authDomain: "super-size-68117.firebaseapp.com",
  projectId: "super-size-68117",
  storageBucket: "super-size-68117.appspot.com",
  messagingSenderId: "534223575462",
  appId: "1:534223575462:web:f28a3c7a841b3ef9d99767",
  measurementId: "G-LL6N21X687"
};

const config = initializeApp(firebaseConfig);
const analytics = getAnalytics(config);

export default config; 