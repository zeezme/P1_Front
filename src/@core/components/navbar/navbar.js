/* eslint-disable prefer-template */
import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarText, Row } from 'reactstrap'
import { Link, useLocation } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import LogoutButton from '../logoutButton/logoutButton'
import { capitalizeFirstLetter } from '../../../services/ordinary'
import { ImLeaf } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'
import { togleSidebar } from '../../../redux/user'
import { Menu } from 'react-feather'

// eslint-disable-next-line react/prop-types
export default function KitNavbar() {
  const [cookies] = useCookies(['token'])
  const user = cookies['token']
  const sidebarResponsive = useSelector((state) => state.user.sidebar_responsive)
  const dispatch = useDispatch()
  const location = useLocation()

  const isHomeRoute = location.pathname === '/'

  return (
    <Navbar
      style={{ backgroundColor: '#ededed', zIndex: '2', position: 'fixed', width: '100vw' }}
      className="">
      <div className="w-100 d-flex flex-row justify-content-between">
        <div className="d-flex justify-content-start align-items-center">
          <NavbarBrand href="/">
            <NavbarText className="ms-2 fw-bolder text-primary">
              LEAF <ImLeaf className="ms-2" />
            </NavbarText>
          </NavbarBrand>
          {sidebarResponsive && !isHomeRoute && user && (
            <Button
              color="transparent"
              className="d-flex flex-row justify-content-center align-items-center cursor-pointer link-none text-primary on-hover p-0 m-0 pt-1"
              onClick={() => dispatch(togleSidebar(true))}>
              <Menu />
            </Button>
          )}
        </div>

        <div className="d-flex justify-content-end">
          <div className="d-flex justify-content-center align-items-center text-dark ">
            {!user?.username && (
              <Button
                color="transparent"
                className="d-flex flex-column justify-content-center align-items-center cursor-pointer link-none text-primary on-hover">
                <p className="m-0 text-primary h5 fw-normal">Preços</p>
              </Button>
            )}
          </div>
          {!user?.username && (
            <Button
              color="transparent"
              className="d-flex flex-column justify-content-center align-items-center cursor-pointer link-none text-primary on-hover">
              <p className="m-0 text-primary h5 fw-normal">Empresa</p>
            </Button>
          )}
          <Button
            color="transparent"
            tag={Link}
            className="d-flex flex-column justify-content-center align-items-center cursor-pointer link-none text-primary on-hover "
            to="/login">
            <p className="m-0 text-primary h5 fw-normal">
              {user?.username ? capitalizeFirstLetter(user.username) : 'Login'}
            </p>
          </Button>
          {user && <LogoutButton />}
        </div>
      </div>
    </Navbar>
  )
}
