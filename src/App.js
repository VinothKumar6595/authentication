import { Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContextProvider from "./components/Store/AuthContextProvider";
import PasswordChangePage from "./pages/PasswordChangePage";

function App() {
  return (
    <AuthContextProvider>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
          <Route path="/changepassword">
            <PasswordChangePage />
          </Route>
        </Switch>
      </Layout>
    </AuthContextProvider>
  );
}

export default App;
