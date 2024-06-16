import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './EmployeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:8080/get');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  return (
    <div className="employee-list-container">
      <h2>Employee List</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Number of Working days</th>
            <th>Number of Leave days</th>
            <th>Leave Status</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.username}</td>
              <td>{employee.dept}</td>
              <td>{employee.designation}</td>
              <td>{employee.working_days}</td>
              <td>{employee.leave_days}</td>
              <td>{employee.leave_status}</td>
              <td>{employee.salary}</td>
              <td>
                <Link to='/AdminEdit'><button className="edit-button">Edit</button></Link>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
