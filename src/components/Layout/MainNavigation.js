import { Link, useHistory } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import AuthContext from "../Store/Auth-Context";

const MainNavigation = () => {
  const authCntx = useContext(AuthContext);
  const history = useHistory();
  const logOutHandler = () => {
    authCntx.logout();
    history.push("/auth");
  };

  console.log(authCntx.isLoggedIn);
  const loggedIn = authCntx.isLoggedIn;
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!loggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {loggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {loggedIn && (
            <li>
              <button onClick={logOutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
