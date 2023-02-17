import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './register';
import Profile from './profile';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Register />}/>
    <Route path="/profile" element={<Profile />}/>
  </Routes>
  );
}

export default App;
