import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function NotFound() {
  const [selectedLayout] = useOutletContext()
  const decideTextColor = () => {
    return selectedLayout === 'light' ? 'dark' : 'light'
  }
  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center text-${decideTextColor()}`}>
      <div className="h1">Page not found</div>
      <div className="h2 text-danger">404</div>
    </div>
  )
}
