import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './LoginPage/UserContext';
import './AdminEdit.css';

const AdminEdit = () => {
  const navigate = useNavigate();

  const [signupDetails, setSignupDetails] = useState({
    salary: "",
    working_days: "",
    leave_days: "",
    leave_status: ""
  });

  const { setUser } = useContext(UserContext);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/insert', signupDetails);
      console.log('Edit successful:', response.data);
      setUser(response.data);
      navigate('/EmployeeList');
    } catch (error) {
      console.error('Edit error:', error);
    }
  };

  const handleInputChange = (e) => {
    setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className='register-container'>
      <div className='register-form-wrapper'>
        <form onSubmit={handleSignup}>
          <h2 className='register-title'>Edit Details</h2>
          
          <div className='form-group'>
            <label>Salary:</label>
            <input
              type="number"
              name="salary"
              value={signupDetails.salary}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Number of Working Days:</label>
            <input
              type="number"
              name="working_days"
              value={signupDetails.working_days}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Number of Leave Days:</label>
            <input
              type="number"
              name="leave_days"
              value={signupDetails.leave_days}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Leave Status:</label>
            <select
              name="leave_status"
              value={signupDetails.leave_status}
              onChange={handleInputChange}
              required
            >
              <option value="">Select</option>
              <option value="Approved">Approved</option>
              <option value="Pending">Pending</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          <div className='form-group'>
            <button type="submit" className='register-button'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminEdit;
