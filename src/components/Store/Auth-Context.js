import react from "react";

const AuthContext = react.createContext({
  idToken: "",
  addId: () => {},
});

export default AuthContext;
