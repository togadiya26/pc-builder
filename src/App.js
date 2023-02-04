import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomizedSelects from './Components/CustomizedSelects';
import PDF from './Components/PDF';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CustomizedSelects/>} />
        <Route path="/Bill1" element={<PDF/>} />
      </Routes>
    </div> 
  );
}

export default App;
