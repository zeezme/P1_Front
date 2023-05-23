/* eslint-disable prefer-template */
import React from 'react'
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Navbar,
  NavbarBrand,
  NavbarText,
  Row,
  UncontrolledDropdown
} from 'reactstrap'
import { Link, useLocation } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import LogoutButton from '../logoutButton/logoutButton'
import { capitalizeFirstLetter } from '../../../services/ordinary'
import { ImLeaf } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'
import { togleSidebar } from '../../../redux/user'
import { Info, Menu } from 'react-feather'

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function KitNavbar({ screenWidth }) {
  const [cookies] = useCookies(['token'])
  const user = cookies['token']
  const logged = useSelector((state) => state.login.user)
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
          {screenWidth <= 400 && (
            <UncontrolledDropdown>
              <DropdownToggle caret color="" className="text-primary">
                <Info />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <p className="m-0 text-primary h5 fw-normal">Preços</p>
                </DropdownItem>
                <DropdownItem divider />

                <DropdownItem>
                  <p className="m-0 text-primary h5 fw-normal">Empresa</p>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={Link} to={logged ? '/paywall' : '/login'}>
                  <p className="m-0 text-primary h5 fw-normal">
                    {user?.username ? capitalizeFirstLetter(user.username) : 'Login'}
                  </p>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          )}
          {!user?.username && screenWidth >= 400 && (
            <div className="d-flex justify-content-center align-items-center text-dark ">
              <Button
                color="transparent"
                className="d-flex flex-column justify-content-center align-items-center cursor-pointer link-none text-primary on-hover">
                <p className="m-0 text-primary h5 fw-normal">Preços</p>
              </Button>

              <Button
                color="transparent"
                className="d-flex flex-column justify-content-center align-items-center cursor-pointer link-none text-primary on-hover">
                <p className="m-0 text-primary h5 fw-normal">Empresa</p>
              </Button>
            </div>
          )}
          {screenWidth >= 400 && (
            <Button
              color="transparent"
              tag={Link}
              className="d-flex flex-column justify-content-center align-items-center cursor-pointer link-none text-primary on-hover "
              to={logged ? '/paywall' : '/login'}>
              <p className="m-0 text-primary h5 fw-normal">
                {user?.username ? capitalizeFirstLetter(user.username) : 'Login'}
              </p>
            </Button>
          )}
          {user && <LogoutButton />}
        </div>
      </div>
    </Navbar>
  )
}
