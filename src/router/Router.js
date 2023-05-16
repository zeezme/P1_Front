import * as React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { VerticalLayout } from '../layouts/verticalLayout'
import { routes } from './routes'

const NotFound = React.lazy(() => import('../@core/components/not-found/not-found'))
import { verifyJwt } from '../services/verifyJwt'
import Loading from '../@core/components/loading'
const NoPermission = React.lazy(() => import('../@core/components/no-permission/no-permission'))

export const Router = () => {
  const [resolvedRoutes, setResolvedRoutes] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const resolveRoutes = async () => {
      const resolved = await Promise.all(
        routes.map(async (route) => {
          if (route.privateRoute === true) {
            const verify = await verifyJwt()

            if (verify.message === 'Authorized') {
              return route
            } else {
              return { ...route, element: <NoPermission /> }
            }
          }
          return route
        })
      )
      setResolvedRoutes(resolved)
      setIsLoading(false)
    }
    resolveRoutes()
  }, [])
  return (
    <HashRouter basename="/">
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          {resolvedRoutes.map((route) => {
            return (
              <Route element={route.layout && <VerticalLayout />} key={route.id}>
                <Route {...route} />
              </Route>
            )
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </HashRouter>
  )
}
