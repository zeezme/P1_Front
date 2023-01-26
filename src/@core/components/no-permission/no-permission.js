import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function NoPermission() {
  const [selectedLayout] = useOutletContext()
  const decideTextColor = () => {
    return selectedLayout === 'light' ? 'dark' : 'light'
  }
  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center text-${decideTextColor()}`}>
      <div className="h1">Você não tem permissão para acessar esta página</div>
      <Button className="m-3" color="success" tag={Link} to="/t2">
        Fazer login
      </Button>
    </div>
  )
}
