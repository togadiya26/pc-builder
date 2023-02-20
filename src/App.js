import { Route, Routes } from 'react-router-dom';
import './App.css';
import PcBuilder from './Components/Pc_Builder';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PcBuilder/>}/>
      </Routes>
    </div> 
  );
}

export default App;
