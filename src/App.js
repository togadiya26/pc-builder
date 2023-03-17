import './App.css';
import React from 'react';
import PcBuilder from './Components/Pc_Builder';
import { Routes, Route, Navigate } from 'react-router-dom';
import Admin from './Components/Admin/Admin';
import 'bootstrap/dist/css/bootstrap.min.css'
import Auth from './Components/AddProduct/Auth';
import SignUp from './Components/Admin/SignUp';

function App() {

  
  const RequireAuth = ({children}) => {
    const token = JSON.parse(localStorage.getItem('token'));
    return token ? children : <Navigate to={"/admin"}/>
  }

  const UnRequireAuth = ({children}) => {
    const token = JSON.parse(localStorage.getItem('token'));
    return !token ? children : <Navigate to={"/auth"}/>
  }
  
  return (
    <Routes>
      <Route path="/" element={<PcBuilder/>} />
      <Route path="/admin" element={<UnRequireAuth ><Admin/></UnRequireAuth>} />
      <Route path='/signUp' element={<SignUp/>} />
      <Route path="/auth" element={<RequireAuth><Auth /></RequireAuth>} />
    </Routes>
  );
}

export default App;