import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './component/Login/Login';
// import { Home } from './components/Home/Home';
import Registration from './component/Registration/Registration';
import logo from './logo.svg';
import style from './App.module.css';

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/home" element={<Home />} /> */}
    </Routes>
    </BrowserRouter>
  );
};

export default App; 