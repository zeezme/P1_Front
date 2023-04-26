/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import KitNavbar from '../@core/components/navbar/navbar'
import Sidebar from '../@core/components/sidebar/sidebar'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { setSidebarResponsive } from '../redux/user'

export const VerticalLayout = () => {
  const [cookies] = useCookies(['token'])
  const location = useLocation()
  const dispatch = useDispatch()

  const user = cookies['token']

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const checkScreenX = () => {
    if (screenWidth < 768) {
      dispatch(setSidebarResponsive(true))
    } else {
      dispatch(setSidebarResponsive(false))
    }
  }

  const isHomeRoute = location.pathname === '/'

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    checkScreenX()
  }, [screenWidth])

  return (
    <Fragment>
      <KitNavbar />
      {user && !isHomeRoute && <Sidebar />}

      <div
        className="d-flex flex-row justify-content-center"
        style={
          screenWidth > 768
            ? !isHomeRoute
              ? { marginLeft: '80px' }
              : { marginLeft: '0' }
            : { marginLeft: '0' }
        }>
        <div style={{ marginTop: '50px', width: '100%' }}>
          <Outlet />
        </div>
      </div>
    </Fragment>
  )
}
