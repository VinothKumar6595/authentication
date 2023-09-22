import react from "react";

const AuthContext = react.createContext({
  idToken: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export default AuthContext;
