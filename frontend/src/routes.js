import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeScreen from "./components/screens/HomeScreen";
import ProductScreen from "./components/screens/ProductScreen";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/product/:id" component={ProductScreen} />
    </Switch>
  );
};

export default Routes;
