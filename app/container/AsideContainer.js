import React from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom'

import RenderRoutes from '../components/commons/RenderRoutes.js'

export default ({ routes, path }) => (
  <div>
    <div className='aside-nav'>
      <NavLink to="/basic/table">table</NavLink>
      <NavLink to="/basic/card">card</NavLink>
      <NavLink to="/basic/chart">charts</NavLink>
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
