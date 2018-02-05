import React from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom'

import RenderRoutes from '../components/commons/RenderRoutes.js'

export default ({ routes, path }) => (
  <div>
    <div className='aside-nav'>
      <NavLink to="/monitor/v1">监控区一</NavLink>
      <NavLink to="/monitor/v2">监控区二</NavLink>
    </div>

    {
      routes.map((route, i) => {
        return (
          <RenderRoutes key={i} {...route}/>
        )
      })
    }
  </div>
)
