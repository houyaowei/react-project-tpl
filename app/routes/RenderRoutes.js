import React from "react";
import { Route, Redirect } from "react-router-dom";

export default route => (
  <Route
    path={route.path}
    render={props =>
      sessionStorage.getItem("loginStatue") === "1" ? (
        <route.component
          {...props}
          routes={route.children}
          exact
          path={route.path}
        />
      ) : (
        <Redirect to="/iot/login" />
      )
    }
  />
);
