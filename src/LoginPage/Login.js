/*import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext'; // Import UserContext
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: ''
  });
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    axios.get('http://localhost:8080/get')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUsers = users.filter(user => user.username === loginDetails.username && user.password===loginDetails.password);
    
    // console.log(foundUsers);

    if (foundUsers.length > 0) {
      setUser(foundUsers[0]);
      navigate('/profile')
    } else {
      alert('Account not found please register')
      navigate('/reg')
    }
  };

  const handleInputChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className='whole'>
      <div >
      <div style={{ maxWidth: '400px', margin: 'auto' }}>
       <form onSubmit={handleLogin}>
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LOGIN</h2>
          <label>
            <b>USERNAME :</b>
            <input
              type="text"
              name="username"
              value={loginDetails.username}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
           <b> PASSWORD :</b>
            <input
              type="password"
              name="password"
              value={loginDetails.password}
              onChange={handleInputChange}
            />
          </label>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" className='button_log'>Login</button>
          <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Don't have an account</h5>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/reg"><button className='button_log'>Register</button></Link>
        </form>

        <br></br>
        
      </div>
       
        </div>
      
      </div>
  )
}


export default Login;

*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your login logic
    console.log('Login details:', formData);
    alert('Login successful!');
    // Reset form fields after login
    setFormData({ username: '', password: '' });
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Login</h2>
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
        <Link to='/profile'><button type="submit" className="submit-button">Login</button></Link>
      </form>
      <p className="auth-bottom-text">
        New user? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
