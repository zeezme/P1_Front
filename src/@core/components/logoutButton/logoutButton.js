import React from 'react'
import { LogOut } from 'react-feather'
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
        <LogOut size={18} className="text-primary" />
      </Button>
    </Col>
  )
}
