/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import KitNavbar from '../@core/components/navbar/navbar'
import Sidebar from '../@core/components/sidebar/sidebar'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { setSidebarResponsive } from '../redux/user'

export const VerticalLayout = () => {
  const [cookies] = useCookies(['token'])
  const user = cookies['token']

  const dispatch = useDispatch()
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const checkScreenX = () => {
    if (screenWidth < 768) {
      dispatch(setSidebarResponsive(true))
    } else {
      dispatch(setSidebarResponsive(false))
    }
  }

  useEffect(() => {
    checkScreenX()
  }, [screenWidth])

  return (
    <Fragment>
      <KitNavbar />
      {user && <Sidebar />}
      <div
        className="d-flex flex-row justify-content-center"
        style={screenWidth > 768 ? { marginLeft: '80px' } : { marginLeft: '0' }}>
        <Outlet />
      </div>
    </Fragment>
  )
}
