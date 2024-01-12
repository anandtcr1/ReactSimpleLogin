import './App.css';

import { Routes, Route } from 'react-router-dom';
import Navbar from './shared/Navbar';
import Login from './components/Login/Login';
import Home from './components/Login/Home';

function App() {
  return (
    <>
    <Navbar />
    <div className='container'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
    </div>
    </>
  );
}

export default App;
