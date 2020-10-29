import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import RegisterComplete from "../pages/auth/RegisterComplete";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Dashboard from "../pages/user/Dashboard";
import UserPrivateRoutes from "../routes/UserPrivateRoutes";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/register/complete" component={RegisterComplete} />
      <Route exact path="/forgot/password" component={ForgotPassword} />
      <UserPrivateRoutes exact path="/user/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
