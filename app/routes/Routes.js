import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./history";
import RenderRoutes from "./RenderRoutes";
import LoginContainer from "../components/login/LoginContainer";
import Container from "../container/Container";
import Register from "../components/register/Register";
import LayoutComponent from "../components/home/equipment/Layout";

// global router config
const routesConfig = [
  {
    path: "/iot/equipment",
    component: LayoutComponent
  },
  {
    path: "/iot",
    component: LayoutComponent
  }
];

function AuthRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        sessionStorage.getItem("loginStatue") === "1" ? (
          <Redirect to="/devops/dashboard" />
        ) : (
          <Route component={LoginContainer} />
        )
      }
    />
  );
}

export default () => (
  <Router history={history}>
    <Switch>
      <AuthRoute path="/iot/login" exact component={LoginContainer} />
      <AuthRoute path="/" exact component={LoginContainer} />
      <AuthRoute path="/iot" exact component={LoginContainer} />
      <AuthRoute path="/iot/register" exact component={Register} />
      <Container>
        <Switch>
          {routesConfig.map((route, i) => (
            <RenderRoutes key={Math.random()} {...route} />
          ))}
          <Route
            render={() =>
              sessionStorage.getItem("loginStatue") === "1" ? (
                <Redirect to="/iot/equipment" />
              ) : (
                <Redirect to="/iot/login" />
              )
            }
          />
        </Switch>
      </Container>
    </Switch>
  </Router>
);
