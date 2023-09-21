import { Link, useHistory } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import AuthContext from "../Store/Auth-Context";

const MainNavigation = () => {
  const authCntx = useContext(AuthContext);
  const history = useHistory();
  const logOutHandler = () => {
    authCntx.addId("");
    history.push("/auth");
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            {authCntx.idToken.length === 0 && <Link to="/auth">Login</Link>}
          </li>
          <li>
            {authCntx.idToken.length > 0 && <Link to="/profile">Profile</Link>}
          </li>
          <li>
            {authCntx.idToken.length > 0 && (
              <button onClick={logOutHandler}>Logout</button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
