import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { useContext, useEffect } from "react";
import AuthContext from "./components/Store/Auth-Context";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  const authCntx = useContext(AuthContext);
  useEffect(() => {
    const interval = setInterval(() => {
      authCntx.logout();
      alert("Session Timed OUT , Please Login Again");
    }, 300000);
    return () => clearInterval(interval);
  }, [history, authCntx]);
  console.log(authCntx.isLoggedIn);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!authCntx.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        {authCntx.isLoggedIn && (
          <Route path="/profile">
            <UserProfile />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
