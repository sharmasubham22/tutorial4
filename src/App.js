import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './login';
import UsersList from './users';
import Profile from './profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user" element={<UsersList />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
