import React from 'react'
import { Box, Eye } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import { setSidebar } from '../../../redux/user'
import { FaCashRegister } from 'react-icons/fa'

export default function Sidebar() {
  const sidebarStatus = useSelector((state) => state.user.sidebar)
  const dispatch = useDispatch()
  return (
    <>
      <div
        onMouseEnter={() => dispatch(setSidebar())}
        onMouseLeave={() => dispatch(setSidebar())}
        className={sidebarStatus ? 'sidebar p-0' : 'sidebar-open sidebar p-0'}>
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
            <Button color="" className="text-primary">
              <Box />
            </Button>
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
            <Button color="" className="text-primary">
              <FaCashRegister size={20} />
            </Button>
          )}
        </div>
      </div>
    </>
  )
}
