import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
        <h1>Home</h1>
        <p><button onClick={() => { navigate('order-summary')}}>place order</button></p>
    </div>
  )
}
