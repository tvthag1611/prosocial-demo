import React from 'react'
import Home from './../view/Home/Home'
import Group from '../view/Groups/Group'

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => {
      return (
        <div className="content row">
          <Home />
        </div>
      )
    },
    isPrivate: true
  },
  {
    path: '/groups',
    exact: true,
    component: () => <Group />,
    isPrivate: true
  },
  // {
  //   path: '/profile/:id',
  //   exact: true,
  //   component: () => <AsyncPage component='ProfilePage' />,
  //   isPrivate: true
  // },
  // {
  //   path: '/profile',
  //   redirect: true,
  //   to: '/'
  // },
  // {
  //   path: '/login',
  //   exact: true,
  //   component: () => <AsyncPage component='Login' />,
  //   withoutNormalLayout: true,
  //   isPrivate: true
  // },
  // {
  //   path: '/logout',
  //   exact: true,
  //   component: () => <AsyncPage component='Logout' />,
  //   withoutNormalLayout: true,
  //   isPrivate: true
  // },
  // {
  //   path: '/groups',
  //   exact: true,
  //   component: () => <AsyncPage component='Groups' />,
  //   isPrivate: true
  // },
  // {
  //   path: '/group/:id',
  //   exact: true,
  //   component: Group,
  //   title: 'Group',
  //   isPrivate: true
  // },
  // {
  //   path: '/404',
  //   exact: true,
  //   component: () => <AsyncPage component='404' />,
  //   isPrivate: true
  // },
  // {
  //   path: '/about',
  //   exact: true,
  //   component: () => <AsyncPage component='AboutUs' />,
  //   isPrivate: true
  // },
  // {
  //   path: '/post/:id',
  //   exact: true,
  //   component: () => <AsyncPage component='Post' />,
  //   isPrivate: true
  // }
]
export default routes
