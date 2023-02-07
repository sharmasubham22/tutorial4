import './App.css';
import React from 'react';
import ProdHome from './components/prodhome';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProdCateg from './components/prodcateg';


function App() {
  return (
    
    <Routes>
      <Route path="/" element={<ProdHome />} />
      <Route path='/category' element={<ProdCateg />}/>
      </Routes>
  );
}

export default App;