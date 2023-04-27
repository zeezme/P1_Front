import React from 'react'
import Loading from '../../@core/components/loading'
import Home from '../../views/home/home'

const Login = React.lazy(() => import('../../views/login/login'))
const PayWall = React.lazy(() => import('../../views/paywall/home'))

export const routes = [
  {
    id: 0,
    name: 'home',
    path: '/',
    element: (
      <React.Suspense fallback={<Loading />}>
        <Home />
      </React.Suspense>
    ),
    show: true,
    layout: true
  },
  {
    id: 1,
    name: 'login',
    path: '/login',
    element: (
      <React.Suspense fallback={<Loading />}>
        <Login />
      </React.Suspense>
    ),
    show: true,
    layout: false
  },
  {
    id: 2,
    name: 'paywall',
    path: '/paywall',
    element: (
      <React.Suspense fallback={<Loading />}>
        <PayWall />
      </React.Suspense>
    ),
    show: false,
    layout: true
  }
]
