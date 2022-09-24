import * as React from 'react';
import { useEffect, useContext } from 'react';
import UserContext from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

export function Home () {
  const value = useContext(UserContext)
  const navigate = useNavigate();
  useEffect(() => {
    if (!value.user){
      navigate("/login")
    }
  })
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
