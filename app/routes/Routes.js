import React from "react";
import {
    Router,
    Route,
    IndexRedirect,
    Switch
} from 'react-router-dom';
import history from './history';
import RenderRoutes from './RenderRoutes';

import LoginContainer from "../components/login/LoginContainer";
import Container from "../container/Container"
// import AsideContainer from "../container/AsideContainer"
//import Login from "../components/login/Login";
import  Conf from "../components/config/layout" 
import Home from "../components/home/Home";
import table from "../components/home/aside/Table";
import Card from "../components/home/aside/Card";
import Chart from "../components/home/aside/Chart";
import Analysis from "../components/analysis/Analysis";
import warn from "../components/warn/warnLayout"
import Deploy from "../components/warn/deploy/deploy";
import PreWarn from "../components/warn/preWarn/PreWarn";
import Equipment from "../components/equipment/equipment"
import Sysadmin from "../components/sysadmin/sysadmin"
import SearchPage from "../components/searchpage/SearchPage";

import People from "../components/config/table";
import Cardmanage from "../components/config/cardManager";
import Housemanage from "../components/config/houseManager";

import BigScreen from "../components/bigScreen/Index";
//global router config
const routesConfig = [
    { 
      path: '/home',
      component: Home
    },
    { 
      path: '/config',
      component: Conf,
      children:[
        {
          path : '/config/peoplemanage',
          component: People
        },
        {
          path : '/config/cardmanage',
          component: Cardmanage
        },
        {
          path : '/config/housemanage',
          component: Housemanage
        }
      ]
    },
    {
      path:'/warning',
      component:warn,
      children:[
        {
          path : '/warning/bukong',
          component: Deploy
        },
        {
          path : '/warning/prewarn',
          component: PreWarn
        }
      ]
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
      path: '/search',
      component: SearchPage
    },
    {
        path: '/analysis',
        component: Analysis
    },
    {
      path: '/equipment',
      component: Equipment
    },
    {
      path: '/sysadmin',
      component: Sysadmin
    },
    {
        path:'/search',
        component: SearchPage
    },
    {
      path:"/bs",
      component : BigScreen
    }
]

export default () => (
    <Router history={history}>
      <Switch>
        <Route path='/login' exact component={LoginContainer} />
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
  )