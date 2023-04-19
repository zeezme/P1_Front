import React from 'react'
import { Box, Eye } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import { setSidebar } from '../../../redux/user'

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
              <span className="h6"> Box Configuration</span>
            </Button>
          ) : (
            <Button color="" className="text-primary">
              <Box></Box>
            </Button>
          )}
          {sidebarStatus ? (
            <Button size="sm w-100 p-2 text-primary on-hover" color="">
              <span className="h6">Eye Configuration</span>
            </Button>
          ) : (
            <Button color="" className="text-primary">
              <Eye />
            </Button>
          )}
        </div>
      </div>
    </>
  )
}
