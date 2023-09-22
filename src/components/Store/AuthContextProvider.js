import React, { useState } from "react";
import AuthContext from "./Auth-Context";

const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [id, setId] = useState(initialToken);
  const userIsLoggedIn = !!id;
  console.log(userIsLoggedIn);
  console.log(id);
  const loginHandler = (id) => {
    setId(id);
    localStorage.setItem("token", id);
  };
  const logoutHandler = () => {
    setId(null);
    localStorage.removeItem("token");
  };

  const authContext = {
    idToken: id,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
