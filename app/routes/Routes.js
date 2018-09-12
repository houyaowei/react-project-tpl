import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import RenderRoutes from "./RenderRoutes";

//proj
import LoginContainer from "../components/login/LoginContainer";
import Container from "../container/Container";
import Home from "../components/home/Home";
import Analysis from "../components/analysis/Analysis";

//global router config
const routesConfig = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/analysis",
    component: Analysis
  }
];

export default () => (
  <Router history={history}>
    <Switch>
      <Route path="/login" exact component={LoginContainer} />
      <Route path="/" exact component={LoginContainer} />
      <Container>
        <Switch>
          {routesConfig.map((route, i) => (
            <RenderRoutes key={i} {...route} />
          ))}
        </Switch>
      </Container>
    </Switch>
  </Router>
);
