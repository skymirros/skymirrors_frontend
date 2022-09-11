import React from 'react';
import { lazy } from 'react';
import { RouteConfig } from 'react-router-config';
import { Redirect } from 'react-router-dom';
const routes: RouteConfig[] = [
  {
    path: '/clientarea',
    component: lazy(() => import('../component/SideMenu')),
    // render() {
    //   return <Redirect to='/clientarea/overview' />
    // },
    routes: [
      {
        path: '/overview',
        exact: true,
        component: lazy(() => import('../page/OverView'))
      }

    ]
  },
];

export default routes;
