import React from "react";
import {
    Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import history from './history';
import LoginContainer from "../components/login/LoginContainer";
import Container from "../container/Container";
import RenderRoutes from './RenderRoutes';

import  Conf from "../components/config/layout" 
import Home from "../components/home/Home";
import table from "../components/home/aside/Table";
import Card from "../components/home/aside/Card";
import Chart from "../components/home/aside/Chart";
import Analysis from "../components/analysis/Analysis";
import warn from "../components/warn/warnLayout";

//global router config
export const routesConfig = [
    { 
        path: '/config',
        component: Conf
    },
    {
      path:'/warning',
      component:warn
    },
    {
      path: "/basic",
      children:[
        {
          path : '/basic/table',
          component: table
        },
        {
          path : '/basic/card',
          component: Card
        },
        {
          path : '/basic/chart',
          component: Chart
        }
      ]
    },
    {
        path: '/analysis',
        component: Analysis
    }
]
export default () => (
  <Router history={history}>
  <Switch>
    <Route path="/" exact component={LoginContainer}>
      <Redirect to="/login" />
    </Route>
    <Route path='/login' exact component={LoginContainer} />
       <Container>
        <Switch>
          {routesConfig.map((route, i) => (
            <RenderRoutes key={i} {...route} />
          ))}
        </Switch>
        </Container>
  
  </Switch>
</Router>
  )