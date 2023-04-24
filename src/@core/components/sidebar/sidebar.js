import React from 'react'
import { Box, Eye } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import { setSidebar } from '../../../redux/user'
import { FaCashRegister } from 'react-icons/fa'

export default function Sidebar() {
  const sidebarStatus = useSelector((state) => state.user.sidebar)
  const sidebarResponsive = useSelector((state) => state.user.sidebar_responsive)

  const dispatch = useDispatch()
  return (
    <div
      onMouseEnter={() => dispatch(setSidebar(true))}
      onMouseLeave={() => dispatch(setSidebar(false))}
      className={
        sidebarStatus
          ? 'sidebar p-0'
          : sidebarResponsive
          ? 'sidebar-none'
          : 'sidebar-open sidebar p-0'
      }>
      <div className="d-flex flex-column justify-content-center align-items-center ">
        {sidebarStatus ? (
          <Button size="sm w-100 p-2  text-primary on-hover" color="">
            <div className="h6 d-flex flex-row justify-content-between align-items-center ms-3">
              <Box />
              <div className="w-100 d-flex flex-row align-items-center justify-content-center">
                Consultas
              </div>
            </div>
          </Button>
        ) : (
          <div color="" className="text-primary">
            <Box />
          </div>
        )}
        {sidebarStatus ? (
          <Button size="sm w-100 p-2 text-primary on-hover" color="">
            <div className="h6 d-flex flex-row justify-content-between align-items-center ms-3">
              <FaCashRegister size={20} />
              <div className="w-100 d-flex flex-row align-items-center justify-content-center">
                Caixa
              </div>
            </div>
          </Button>
        ) : (
          <div color="" className="text-primary mt-4">
            <FaCashRegister size={20} />
          </div>
        )}
      </div>
    </div>
  )
}
