import './App.css';
import PcBuilder from './Components/Pc_Builder';
import { Routes, Route } from 'react-router-dom';
import Admin from './Components/Admin/Admin';
import 'bootstrap/dist/css/bootstrap.min.css'
import Auth from './Components/AddProduct/Auth';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PcBuilder />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
