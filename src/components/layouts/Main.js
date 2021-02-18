import React from "react";
import { Route, Switch } from "react-router-dom";
import ROUTES from "../../ROUTES";

function Main() {
  return (
    <Switch>
      {ROUTES.map((route) => (
        <Route {...route} key={route.path} />
      ))}
    </Switch>
  );
}

export default Main;
