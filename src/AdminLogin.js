import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminLogin.css';
import axios from 'axios'
const AdminLogin = () => {
  //const history = useHistory();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your authentication logic
    /*if (formData.username === 'admin' && formData.password === 'password') {
      axios.push('/admin-dashboard'); // Redirect to admin dashboard upon successful login
    } else {
      alert('Invalid username or password');
    }*/
  };

  return (
    <div className="admin-login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Admin Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <Link to= '/emplist'><button type="submit" className="login-button">Login</button></Link>
      </form>
    </div>
  );
};

export default AdminLogin;
