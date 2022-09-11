import { lazy } from 'react';
import { RouteConfig } from 'react-router-config';

const routes: RouteConfig[] = [
  {
    path: '/clientarea',
    component: lazy(() => import('../component/SideMenu')),
    routes: [
      {
        path: '/clientarea/overview',
        component: lazy(() => import('../page/OverView'))
      }
    ]
  },
];

export default routes;
