import React from 'react'
import { Link } from 'react-router-dom'

//links to the profile Dashboard page
const NotFoundPage = () => {
  return (
    <div>
      404 Not Found
      <Link to="/Dashboard">My Profile</Link>
    </div>
  );
}

export default NotFoundPage