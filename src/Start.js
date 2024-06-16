import React from 'react';
import { Link } from 'react-router-dom';
import './Start.css';

const Start = () => {
  return (
    <div className="start-container">
      <h1>Welcome to the Payroll Management System</h1>
      <div className="button-container">
        <Link to="/admin-login">
          <button className="access-button admin-button">Admin Access</button>
        </Link>
        <Link to="/login">
          <button className="access-button user-button">User Access</button>
        </Link>
      </div>
    </div>
  );
};

export default Start;
