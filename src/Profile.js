/*import React, { useContext } from 'react';
import { UserContext } from './LoginPage/UserContext';
import './Profile.css';

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="profile-container">
      <h2>Welcome to Your Dashboard</h2>
      <div className="profile-card">
        <h3>User Profile</h3>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone Number:</strong> {user.ph}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Designation:</strong> {user.designation}</p>
        <p><strong>Department:</strong> {user.dept}</p>
      </div>
    </div>
  );
};

export default Profile;
*/


import React, { useContext} from 'react';
import { UserContext} from './LoginPage/UserContext';

import './Profile.css';

export default function Profile() {
    // eslint-disable-next-line
    const { user, setUser } = useContext(UserContext);

  return (
    <div className='g'>
    <br></br>
    <br></br>
    <h2 className='e'>PROFILE</h2>
    <table cellPadding={10} className='f'>
        <tr>
            <b><td>NAME :</td></b>
            <td>{user.username}</td>
        </tr>
        <br></br>

        <tr>
            <b><td>AGE :</td></b>
            <td>{user.age}</td>
        </tr>
        <br></br>

        <tr>
            <b><td>GENDER :</td></b>
            <td>{user.gender}</td>
        </tr>
        <br></br>

        <tr>
            <b><td>MOBILE NUMBER :</td></b>
            <td>{user.ph}</td>
        </tr>
        <br></br>

        <tr>
            <b><td>EMAIL :</td></b>
            <td>{user.email}</td>
        </tr>
        <br></br>

    
        <tr>
            <b><td>DESIGNATION :</td></b>
            <td>{user.designation}</td>
        </tr>
        <br></br>

        <tr>
            <b><td>DEPARTMENT :</td></b>
            <td>{user.dept}</td>
        </tr>
        <br></br>

    </table>
    </div>
  )
}