
/*import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Start from './Start';
import Login from './LoginPage/Login';
import Register from './LoginPage/Register';
import { UserProvider } from './LoginPage/UserContext';
import AdminLogin from './AdminLogin';
import EmployeeList from './EmployeeList';
import ApplyLeave from './ApplyLeave';
function App() {
  return (
    <UserProvider>
    <BrowserRouter>
    
    <Routes>
        <Route path='/' element={<Start/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/reg' element={<Register/>}></Route>
        <Route path='/admin-login' element={<AdminLogin/>}></Route>
        <Route path='/emplist' element={<EmployeeList/>}></Route>
        <Route path='/ApplyLeave' element={<ApplyLeave/>}></Route>
    </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
*/


import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Start from './Start';
import Login from './LoginPage/Login';
import Register from './LoginPage/Register';
import { UserProvider } from './LoginPage/UserContext';
import AdminLogin from './AdminLogin';
import EmployeeList from './EmployeeList';
import ApplyLeave from './ApplyLeave';
import Profile from './Profile';
import AdminEdit from './AdminEdit';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} /> {/* Updated route path */}
          <Route path='/admin-login' element={<AdminLogin />} />
          <Route path='/emplist' element={<EmployeeList />} />
          <Route path='/apply-leave' element={<ApplyLeave />} /> {/* Updated route path */}
          <Route path='/profile' element={<Profile />} /> {/* Updated route path */}
          <Route path='/AdminEdit' element={<AdminEdit />} /> {/* Updated route path */}
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
