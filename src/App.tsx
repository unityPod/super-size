import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './component/Login/Login';
import { Home } from './component/Home/Home';
import Registration from './component/Registration/Registration';
import { AuthContextProvider } from './component/AuthContext/AuthContext';
import logo from './logo.svg';
import style from './App.module.css';

const App = () => {
  return(
    <AuthContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App; 