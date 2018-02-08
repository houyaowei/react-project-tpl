import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Container from "../container/Container"
import AsideContainer from "../container/AsideContainer"
import RenderRoutes from '../components/commons/RenderRoutes';

import LoginContainer from "../components/login/LoginContainer";
import Home from "../components/home/Home";
import Monitor from "../components/home/aside/Monitor";
import Monitor2 from "../components/home/aside/Monitor2";

//global router config
const routesConfig = [
    { path: '/home',
      component: Home
    },
    {
      path: "/monitor",
      component: AsideContainer,
      children:[
        {
          path : '/monitor/v1',
          component: Monitor
        },
        {
          path : '/monitor/v2',
          component: Monitor2
        }
      ]
    }
]

export default () => (
    <Router>
      <Switch>
        <Route path='/login' exact component={LoginContainer} />
        <Container>
          <Switch>
            {routesConfig.map((route, i) => (
              <RenderRoutes key={i} {...route} />
            ))}
            {/* <Route component={NotFound} /> */}
          </Switch>
        </Container>
      </Switch>
    </Router>
  )