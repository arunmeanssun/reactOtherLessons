import React from 'react';
import { useNavigate } from 'react-router-dom';

export const OrderSummary = () => {
    const navigate = useNavigate();
  return (
    <React.Fragment>
        <h2>Order Confirmed</h2>
        <p><button onClick={() => {navigate('/')}}>Go back</button></p>
    </React.Fragment>
  )
}
