import React, { useContext, useState } from "react";
import classes from "../StartingPage/passwordChange.module.css";
import AuthContext from "../Store/Auth-Context";
import { useHistory } from "react-router-dom";
const PasswordChange = () => {
  const id = useContext(AuthContext);
  const history = useHistory();
  const [password, setPassword] = useState("");
  const passwordChangeHandler = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAk_e3NbGKya1-s6hMLpBKK6mk5Ccf3tFU",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: id.idToken,
          password: password,
          returnSecureToken: false,
        }),
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) => {
      if (res.ok) {
        console.log("Password Reset done");
        history.push("/auth");
      } else {
        res.json().then((data) => {
          alert(data.error.message);
        });
      }
    });
  };

  return (
    <div className={classes.password}>
      <form className={classes.form} onSubmit={submitHandler}>
        <h1>Your User Profile</h1>
        <label>New Password</label>
        <input type="text" onChange={passwordChangeHandler} value={password} />
        <button>change password</button>
      </form>
    </div>
  );
};

export default PasswordChange;
