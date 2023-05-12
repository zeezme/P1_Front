import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { VerticalLayout } from '../layouts/verticalLayout'
import { routes } from './routes'

const NotFound = React.lazy(() => import('../@core/components/not-found/not-found'))
/* const Home = React.lazy(() => import('../views/home/home')) */
import Home from '../views/home/home'
const NoPermission = React.lazy(() => import('../@core/components/no-permission/no-permission'))

export const Router = () => {
  const routesJson = routes.map((route) => {
    if (route.show === false) {
      return { ...route, element: <NoPermission /> }
    }
    return route
  })
  return (
    <BrowserRouter>
      <Routes>
        {routesJson.map((route) => {
          return (
            <Route element={route.layout && <VerticalLayout />} key={route.id}>
              <Route {...route} />
            </Route>
          )
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
