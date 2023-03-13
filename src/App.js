import './App.css';
import React from 'react';
import PcBuilder from './Components/Pc_Builder';
import { Routes, Route, Navigate } from 'react-router-dom';
import Admin from './Components/Admin/Admin';
import 'bootstrap/dist/css/bootstrap.min.css'
import Auth from './Components/AddProduct/Auth';
import SignUp from './Components/Admin/SignUp';

function App() {

  const [user, setUser] = React.useState(false)

  const RequireAuth = ({children}) => {
    return user ? children : <Navigate to="/admin"/>
  }
  
  return (
    <Routes>
      <Route path="/" element={<PcBuilder />} />
      <Route path="/admin" element={<Admin sU={setUser} />} />
      <Route path='/signUp' element={<SignUp/>} />
      <Route path="/auth" element={<RequireAuth><Auth /></RequireAuth>} />
    </Routes>
  );
}

export default App;