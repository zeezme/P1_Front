import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'reactstrap'

// eslint-disable-next-line react/prop-types
const SidebarProps = ({ title, icon }) => {
  const sidebarStatus = useSelector((state) => state.user.sidebar)

  return sidebarStatus ? (
    <Button className="w-100 p-2  text-primary on-hover" color="">
      <div className="h6 d-flex flex-row justify-content-between align-items-center ms-3">
        {icon}
        <div className="w-100 d-flex flex-row align-items-center justify-content-center">
          {title}
        </div>
      </div>
    </Button>
  ) : (
    <Button className="w-100 p-2  text-primary on-hover" color="">
      <div className="h6 d-flex flex-row justify-content-between align-items-center ms-3">
        {icon}
      </div>
    </Button>
  )
}

export default SidebarProps
