/* eslint-disable prefer-template */
import React, { Fragment } from 'react'
import { Button, Col, Navbar, NavbarBrand, NavbarText, Row } from 'reactstrap'
import { MessageCircle, LogIn, ShoppingCart, User } from 'react-feather'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import LogoutButton from '../logoutButton/logoutButton'
import { capitalizeFirstLetter } from '../../../services/ordinary'

// eslint-disable-next-line react/prop-types
export default function KitNavbar() {
  const [cookies] = useCookies(['token'])

  const user = cookies['token']

  return (
    <Fragment>
      <Navbar className="mb-0" color={''}>
        <Row className="w-100">
          <Col lg={2} sm={1} className="d-flex justify-content-start">
            <NavbarBrand href="/">
              {/*    <img
                alt="logo"
                src="/logo.png"
                style={{
                  height: 40,
                  width: 40
                }}
              /> */}
              <NavbarText className="ms-2 fw-bolder text-primary">LEAP</NavbarText>
            </NavbarBrand>
          </Col>
          <Col lg={8}></Col>
          <Col lg={2} sm={6} className="d-flex justify-content-end">
            <Row className="">
              <Col className="d-flex justify-content-center text-dark">
                <Button
                  color="transparent"
                  tag={Link}
                  className="d-flex flex-column justify-content-center align-items-center cursor-pointer link-none text-primary"
                  to="/t2">
                  <p className="m-0">
                    {user?.username ? capitalizeFirstLetter(user.username) : 'Login'}
                  </p>
                  <User className="cursor-pointer"></User>
                </Button>
              </Col>
              {user && <LogoutButton />}
            </Row>
          </Col>
        </Row>
      </Navbar>
    </Fragment>
  )
}
