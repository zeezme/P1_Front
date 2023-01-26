import React from 'react'
import { Spinner } from 'reactstrap'
import { verifyJwt } from '../../services/verifyJwt'
const Login = React.lazy(() => import('../../views/login/login'))
const PayWall = React.lazy(() => import('../../views/paywall/home'))

const getShow = async () => {
  const res = await verifyJwt()

  // eslint-disable-next-line no-unneeded-ternary
  return res.message === 'Authorized'
}

export const routes = [
  {
    id: 1,
    name: 'login',
    path: '/t2',
    element: (
      <React.Suspense fallback={<Spinner />}>
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
      <React.Suspense fallback={<Spinner />}>
        <PayWall />
      </React.Suspense>
    ),
    show: await getShow()
  }
]
