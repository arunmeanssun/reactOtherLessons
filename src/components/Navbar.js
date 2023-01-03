import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './auth';

/* use NavLink instead of Link to maintain the active state */
/* use style prop function to assign the styles to active link*/

export const Navbar = () => {
  const navStylesList = ({isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline"
    }
  };

  const auth = useAuth();

  return (
    <nav className='primary-nav'>
        <NavLink style={navStylesList} to="/">Home</NavLink>
        <NavLink style={navStylesList} to="/about">About</NavLink>
        <NavLink style={navStylesList} to="/products">Products</NavLink>
        <NavLink style={navStylesList} to="/users">Users</NavLink>
        <NavLink style={navStylesList} to="/profile">Profile</NavLink>
        {
          !auth.user && (
            <NavLink style={navStylesList} to="/login">Login</NavLink>
          )
        }
    </nav>
  )
}
