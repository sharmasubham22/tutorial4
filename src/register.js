import "./App.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Register() {
  let navigate = useNavigate();

  const [firstname, setFName] = useState("");
  const [lastname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [fnerr, setFErr] = useState("");
  const [lnerr, setLErr] = useState("");
  const [eerr, setEErr] = useState("");
  const [perr, setPErr] = useState("");
  const [cperr, setCPErr] = useState("");

  const EMPTY_FIELD = "Field cannot be empty!";
  const ALPHABET_ONLY = "Field can contain only alphabets!";
  const EMAIL_FORMAT = "Email format is invalid, try again";
  const PWD_FORMAT = "Password should have atleast 8 characters, one letter and one number";
  const CONFIRM_FORMAT = "Passwords do not match";
  const NO_ERROR = "";
  const ALPHABET_REGEX = /^[a-zA-Z]+$/;
  const EMAIL_REGEX =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const PW_REGEX = /^[A-Za-z0-9\d@$!%*#?&]{8,}$/;

  const validations = (e) => {
    console.log(e.target.value);
    if (e.target.name === "firstname") {
      if (e.target.value) {
        ALPHABET_REGEX.test(e.target.value)
          ? setFErr(NO_ERROR)
          : setFErr(ALPHABET_ONLY);
      } else {
        setFErr(EMPTY_FIELD);
      }
      setFName(e.target.value);
    } 
    if (e.target.name === "lastname") {
      if (e.target.value) {
        ALPHABET_REGEX.test(e.target.value)
          ? setLErr(NO_ERROR)
          : setLErr(ALPHABET_ONLY);
      } else {
        setLErr(EMPTY_FIELD);
      }
      setLName(e.target.value);
    } 
    if (e.target.name === "email") {
      if (e.target.value) {
        EMAIL_REGEX.test(e.target.value)
          ? setEErr(NO_ERROR)
          : setEErr(EMAIL_FORMAT);
      } else {
        setEErr(EMPTY_FIELD);
      }
      setEmail(e.target.value);
    } 
        if (e.target.name === "password") {
          if (e.target.value) {
            PW_REGEX.test(e.target.value)
              ? setPErr(NO_ERROR)
              : setPErr(PWD_FORMAT);
          } else {
            setPErr(EMPTY_FIELD);
          }
           setPassword(e.target.value);
        } 
        if (e.target.name === "cpassword") {
          if (e.target.value) {
            if(e.target.value === password){
              setCPErr(NO_ERROR)
            }
             else {
              setCPErr(CONFIRM_FORMAT);
             }
          } else {
            setCPErr(EMPTY_FIELD);
          }
          setCPassword(e.target.value);
        } 
    
  };

   const register = (e) => {
     e.preventDefault();
     navigate("/profile", {
       state: {
         firstname: firstname,
         lastname: lastname,
         email: email,
       },
     });
   };


  return (
    <div className="App">
      <h1 className="heading">Register Now</h1>
      <div className="form">
        <input
          type="text"
          name="firstname"
          value={firstname}
          placeholder="Enter First Name"
          onChange={validations}
        />
        <p className="error">{fnerr}</p>
        <br></br>

        <input
          type="text"
          placeholder="Enter Last Name"
          name="lastname"
          value={lastname}
          onChange={validations}
          required
        />
        <p className="error">{lnerr}</p>
        <br></br>

        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={validations}
          required
        />
        <p className="error">{eerr}</p>
        <br></br>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={password}
          onChange={validations}
          required
        />
        <p className="error">{perr}</p>
        <br></br>
        <input
          type="password"
          placeholder="Confirm Password"
          name="cpassword"
          value={cpassword}
          onChange={validations}
          required
        />
        <p className="error">{cperr}</p>
        <br></br>
        <button
          disabled={fnerr || lnerr || eerr || perr || cperr}
          onClick={register}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
