/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import KitNavbar from '../@core/components/navbar/navbar'
import Sidebar from '../@core/components/sidebar/sidebar'
import { useCookies } from 'react-cookie'

export const VerticalLayout = () => {
  const [cookies] = useCookies(['token'])
  const user = cookies['token']

  return (
    <Fragment>
      <KitNavbar />
      {user && <Sidebar />}
      <div className="d-flex flex-row justify-content-center">
        <Outlet />
      </div>
    </Fragment>
  )
}
