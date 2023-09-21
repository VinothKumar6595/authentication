import React, { useState } from "react";
import AuthContext from "./Auth-Context";

const AuthContextProvider = (props) => {
  const [id, setId] = useState("");
  const addIdToken = (id) => {
    setId(id);
    console.log(id);
  };
  const authContext = {
    idToken: id,
    addId: addIdToken,
  };
  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
