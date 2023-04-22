/* eslint-disable prefer-template */
import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarText, Row } from 'reactstrap'
import { User, Box } from 'react-feather'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import LogoutButton from '../logoutButton/logoutButton'
import { capitalizeFirstLetter } from '../../../services/ordinary'
import { ImLeaf } from 'react-icons/im'

// eslint-disable-next-line react/prop-types
export default function KitNavbar() {
  const [cookies] = useCookies(['token'])
  const user = cookies['token']

  return (
    <Navbar style={{ backgroundColor: 'transparent' }} className="">
      <div className="w-100 d-flex flex-row justify-content-between">
        <div className="d-flex justify-content-start align-items-center">
          <NavbarBrand href="/">
            <NavbarText className="ms-2 fw-bolder text-primary">
              LEAF <ImLeaf className="ms-2" />
            </NavbarText>
          </NavbarBrand>
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
            to="/t2">
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
