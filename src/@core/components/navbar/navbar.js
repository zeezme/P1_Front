import React from 'react'
import { Button, Col, Navbar, NavbarBrand, Row } from 'reactstrap'
import { MessageCircle, LogIn, ShoppingCart, User } from 'react-feather'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'

// eslint-disable-next-line react/prop-types
export default function KitNavbar() {
  const [cookies] = useCookies(['token'])

  const user = cookies['token']

  return (
    <>
      <Navbar className="mb-2" color={'dark'}>
        <Row className="w-100">
          <Col lg={6} sm={1} className="d-flex justify-content-start">
            <NavbarBrand href="/">
              <img
                alt="logo"
                src="/logo192.png"
                style={{
                  height: 40,
                  width: 40
                }}
              />
            </NavbarBrand>
          </Col>
          <Col lg={6} sm={6} className="d-flex justify-content-end">
            <Row className="">
              <Col className="d-flex justify-content-center ">
                <Row>
                  <div className="d-flex flex-column justify-content-center align-items-center cursor-pointer">
                    <p className="m-0 text-light">Contato</p>
                    <MessageCircle className="cursor-pointer text-light" />
                  </div>
                </Row>
              </Col>
              <Col className="d-flex justify-content-center">
                <div className="d-flex flex-column justify-content-center align-items-center cursor-pointer">
                  <p className="m-0 text-light">Carrinho</p>
                  <ShoppingCart className="cursor-pointer text-light" />
                </div>
              </Col>
              <Col className="d-flex justify-content-center text-light">
                <Link
                  to="/t2"
                  className="d-flex flex-column justify-content-center align-items-center cursor-pointer link-none">
                  <p className="m-0">{user?.username ? user.username : 'Login'}</p>

                  <User className="cursor-pointer"></User>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Navbar>
    </>
  )
}
/*  */
