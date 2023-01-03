/* to understand nested routes */
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Products = () => {
  return (
    <React.Fragment>
        <div>
            <input type="search" placeholder='Search Products' />
        </div>
        <nav className='my-3 px-3'>
            <NavLink to="featured">Featured</NavLink>
            <NavLink to="new">New</NavLink>
        </nav>
        <Outlet />
    </React.Fragment>
  )
}
