/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import KitNavbar from '../@core/components/navbar/navbar'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap'
import Sidebar from '../@core/components/sidebar/sidebar'

export const VerticalLayout = () => {
  return (
    <Fragment>
      <KitNavbar />
      <div className="d-flex flex-row">
        <Sidebar />
        <Outlet />
      </div>
    </Fragment>
  )
}
