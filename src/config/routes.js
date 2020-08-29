import React from 'react'
import Home from './../view/Home/Home'
import Group from '../view/Groups/Group'
import Profile from '../view/Profile/Profile'
import NewFeedGroup from './../view/Groups/NewFeedGroup'
import CreateGroup from './../view/Groups/components/CreateGroup'
import AboutGroup from './../view/Groups/components/AboutGroup'
import MembersGroup from '../view/Groups/components/MembersGroup'
import HomeGroup from '../view/Groups/components/HomeGroup'
import EditGroup from '../view/Groups/components/EditGroup'
import Gallery from '../view/Gallery/Gallery'

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
    component: () => <NewFeedGroup />,
    isPrivate: true
  },
  {
    path: '/profile',
    exact: true,
    component: () => <Profile />,
    isPrivate: true
  },
  {
    path: '/groups/create',
    exact: false,
    component: () => <CreateGroup />,
    isPrivate: true
  },
  {
    path: '/groups/:id',
    exact: true,
    component: () => {
      return (
        <div className="in-your-group">
          <Group />
          <HomeGroup />
        </div>
      )
    },
    isPrivate: true
  },
  {
    path: '/groups/:id/about',
    exact: false,
    component: () => {
      return (
        <div className="in-your-group">
          <Group />
          <AboutGroup />
        </div>
      )
    },
    isPrivate: true
  },
  {
    path: '/groups/:id/media',
    exact: false,
    component: () => {
      return (
        <div className="in-your-group">
          <Group />
          <strong>Media</strong>
        </div>
      )
    },
    isPrivate: true
  },
  {
    path: '/groups/:id/members',
    exact: false,
    component: () => {
      return (
        <div className="in-your-group">
          <Group />
          <MembersGroup />
        </div>
      )
    },
    isPrivate: true
  },
  {
    path: '/groups/:id/edit',
    exact: false,
    component: () => {
      return (
        <EditGroup />
      )
    },
    isPrivate: true
  },
  {
    path: '/gallery',
    exact: true,
    component: () => {
      return (
        <Gallery />
      )
    },
    isPrivate: true
  },
]
export default routes
