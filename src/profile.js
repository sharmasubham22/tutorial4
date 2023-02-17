import "./App.css";
import { useLocation } from "react-router-dom";

function Profile() {
  let incomingData = useLocation();
  const firstname= incomingData.state.firstname;
  const lastname = incomingData.state.lastname;
  const email = incomingData.state.email;
  return (
    <div className="profile">
      <h1 className="heading">User Profile:</h1>
      <div className="details">
        <h2>First Name:</h2>
        <p>{firstname}</p>
        <h2>Last Name:</h2>
        <p>{lastname}</p>
        <h2>Email:</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Profile;
