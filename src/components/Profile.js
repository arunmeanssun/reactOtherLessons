import React from 'react';
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const logoutHandler = () => {
        auth.logout();
        navigate('/');
    }

  return (
    <div>
        <h2>Profile page</h2>
        
        { auth.user != null ? (<p> Welcome {auth.user} &nbsp; 
            <button onClick={logoutHandler}>Logout</button> </p>) : 
            (<p>Please <button onClick={() => navigate('/login')}>Login</button></p>) }
    </div>
  )
}
