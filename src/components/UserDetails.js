import React from 'react';
import { useParams } from 'react-router-dom';

export const UserDetails = () => {
    const params = useParams();   

  return (
    <div>User Details for {params.userId} </div>
  )
}
