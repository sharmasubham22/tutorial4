import React, { useState } from "react";

function LoginUser(props) {
  const EMPTY_FIELD = "Field cannot be empty!";
  const ALPHABET_ONLY = "Field can contain only alphabets!";
  const NO_ERROR = "";
  const ALPHABET_REGEX = /^[a-zA-Z]+$/;

  const [errorMessage, setErrorMessage] = useState();
  const [firstName, setFirstName] = useState("");

  const handleInput = (e) => {
    console.log(e.target.value);
    if (e.target.value) {
      ALPHABET_REGEX.test(e.target.value)
        ? setErrorMessage(NO_ERROR)
        : setErrorMessage(ALPHABET_ONLY);
    } else {
      setErrorMessage(EMPTY_FIELD);
    }
    setFirstName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setUser({ ...props.user, firstName });
  };

  return (
    <div>
      <h2>LoginUser</h2>
      <label>First Name: </label>
      <input
        type="text"
        name="firstname"
        value={firstName}
        onChange={handleInput}
      />
      {/* <br />
            <label>Last Name: </label>
            <input type="text" name="lastname" onChange={handleInput}/> */}
      <br />
      <button disabled={errorMessage || !props.setUser} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default LoginUser;
