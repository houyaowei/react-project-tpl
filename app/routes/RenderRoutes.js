import React from "react";
import { Route } from "react-router-dom";

export default route => (
  <Route
    path={route.path}
    render={props => (
      <route.component
        {...props}
        routes={route.children}
        exact
        path={route.path}
      />
    )}
  />
);
