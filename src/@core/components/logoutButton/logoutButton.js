import React from 'react'
import { ImExit } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'
import { Button, Col } from 'reactstrap'
import Cookies from 'universal-cookie'

export default function LogoutButton() {
  const cookies = new Cookies()
  const navigate = useNavigate()

  const logout = () => {
    cookies.remove('token')
    navigate('/')
    window.location.reload()
  }

  return (
    <Col className="d-flex justify-content-center">
      <Button color="transparent" onClick={logout}>
        {/* <p className="m-0 text-primary">Sair</p> */}
        <ImExit size={20} className="text-primary" />
      </Button>
    </Col>
  )
}
