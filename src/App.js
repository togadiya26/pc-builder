import './App.css';
import React from 'react';
import PcBuilder from './Components/Pc_Builder';
import { Routes, Route, Navigate } from 'react-router-dom';
import Admin from './Components/Admin/Admin';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Auth from './Components/AddProduct/Auth';
import SignUp from './Components/Admin/SignUp';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {

  const RequireAuth = ({children}) => {
    const token = JSON.parse(localStorage.getItem('token'));
    return token ? children : <Navigate to={"/login"}/>
  }

  const UnRequireAuth = ({children}) => {
    const token = JSON.parse(localStorage.getItem('token'));
    return !token ? children : <Navigate to={"/dashboard"}/>
  }
  
  return (
    <Routes>
      <Route path="/" element={<PcBuilder/>} />
      <Route path="/login" element={<UnRequireAuth ><Admin/></UnRequireAuth>} />
      <Route path='/signUp' element={<SignUp/>} />
      <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>} />
      {/* <Route path="/auth" element={<Auth />} /> */}
    </Routes>
  );
}

export default App;