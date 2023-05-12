import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import Loading from '../loading'

export default function NoPermission() {
  return (
    <Loading />
    /*     <div
      className="d-flex flex-column align-items-center justify-content-center text-dark"
      style={{ height: '80vh' }}
    >
      <div className="h1">Você não tem permissão para acessar esta página</div>
      <Button className="m-3" color="success" tag={Link} to="/login">
        Fazer login
      </Button>
    </div> */
  )
}
