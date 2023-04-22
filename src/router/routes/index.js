import React from 'react'
import { verifyJwt } from '../../services/verifyJwt'
import Loading from '../../@core/components/loading'

const Login = React.lazy(() => import('../../views/login/login'))
const PayWall = React.lazy(() => import('../../views/paywall/home'))

const getShow = async () => {
  const res = await verifyJwt()

  return res.message === 'Authorized'
}

export const routes = [
  {
    id: 1,
    name: 'login',
    path: '/t2',
    element: (
      <React.Suspense fallback={<Loading />}>
        <Login />
      </React.Suspense>
    ),
    show: true
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
    show: await getShow()
  }
]
