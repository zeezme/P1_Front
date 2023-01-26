import React from 'react'
import { Outlet } from 'react-router-dom'
import KitNavbar from '../@core/components/navbar/navbar'

export const VerticalLayout = () => {
  const selectedLayout = 'light' //Será determinado pela store

  return (
    <div className="">
      <KitNavbar />
      <div className="container-xxl kit-content-container ">
        <Outlet context={[selectedLayout]} />
      </div>
    </div>
  )
}
