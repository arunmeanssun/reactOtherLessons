import React from 'react';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';

export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveParams = searchParams.get('filter') === "active";

  return (
    <React.Fragment>
        <div>
            <NavLink className="mr-2" to="1">User 1</NavLink>
            <NavLink  className="mr-2" to="2">User 2</NavLink>
            <NavLink  className="mr-2" to="3">User 3</NavLink>
        </div>

        <Outlet />
        <div>
            <button className="mr-2" onClick={() => setSearchParams({filter: 'active', department: "IM"})}>Active Users</button>
            <button onClick={() => setSearchParams({})}> Reset Filter </button>
        </div>

        {
            showActiveParams ? <h2>Showing Active Users</h2> : <h2>Showing all Users</h2>
        }
    </React.Fragment>
  )
}
