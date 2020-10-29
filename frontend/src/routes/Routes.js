import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import RegisterComplete from "../pages/auth/RegisterComplete";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Dashboard from "../pages/user/Dashboard";
import UserRoutes from "../routes/UserRoutes";
import UpdatePassword from "../pages/user/UpdatePassword";
import Wishlist from "../pages/user/Wishlist";
import AdminRoutes from "./AdminRoutes";
import AdminDashboard from "../pages/admin/AdminDashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/register/complete" component={RegisterComplete} />
      <Route exact path="/forgot/password" component={ForgotPassword} />
      <UserRoutes exact path="/user/dashboard" component={Dashboard} />
      <UserRoutes
        exact
        path="/user/reset-password"
        component={UpdatePassword}
      />
      <UserRoutes exact path="/user/wishlist" component={Wishlist} />
      <AdminRoutes exact path="/admin/dashboard" component={AdminDashboard} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
