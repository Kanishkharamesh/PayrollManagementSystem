import React, { useState } from 'react';
import './ApplyLeave.css';

const ApplyLeave = () => {
  const [leaveDetails, setLeaveDetails] = useState({
    reason: '',
    days: ''
  });

  const handleChange = (e) => {
    setLeaveDetails({ ...leaveDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your leave submission logic
    console.log('Submitting leave details:', leaveDetails);
    alert('Leave application submitted successfully!');
    // Reset form fields after submission
    setLeaveDetails({ reason: '', days: '' });
  };

  return (
    <div className="apply-leave-container">
      <form onSubmit={handleSubmit} className="leave-form">
        <h2>Apply for Leave</h2>
        <div className="form-group">
          <label htmlFor="reason">Reason:</label>
          <textarea
            id="reason"
            name="reason"
            value={leaveDetails.reason}
            onChange={handleChange}
            placeholder="Enter reason for leave"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="days">Number of Days:</label>
          <input
            type="number"
            id="days"
            name="days"
            value={leaveDetails.days}
            onChange={handleChange}
            placeholder="Enter number of days"
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ApplyLeave;
