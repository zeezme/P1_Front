import React from 'react'
import { Box, Eye } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import { setSidebar } from '../../../redux/user'
import { FaCashRegister } from 'react-icons/fa'
import SidebarProps from '../../../layouts/sidebarProps'

export default function Sidebar() {
  const sidebarStatus = useSelector((state) => state.user.sidebar)
  const sidebarResponsive = useSelector((state) => state.user.sidebar_responsive)

  const dispatch = useDispatch()
  return (
    <div
      onMouseEnter={() => dispatch(setSidebar(true))}
      onMouseLeave={() => dispatch(setSidebar(false))}
      style={{
        position: 'fixed',
        top: '0',
        zIndex: '1'
      }}
      className={
        sidebarStatus
          ? 'sidebar p-0'
          : sidebarResponsive
          ? 'sidebar-none'
          : 'sidebar-open sidebar p-0'
      }
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ paddingTop: '57px' }}
      >
        <SidebarProps icon={<Box />} title={'Consultas'} />
        <SidebarProps icon={<FaCashRegister size={20} />} title={'Caixa'} />
      </div>
    </div>
  )
}
