import React from 'react'
import { Spinner } from 'reactstrap'

export default function Loading() {
  return (
    <div
      className="d-flex flex-row justify-content-center align-items-center"
      style={{ height: '80vh' }}>
      <Spinner
        type="border"
        color="primary"
        style={{ height: '150px', width: '150px', borderWidth: '20px' }}
      />
    </div>
  )
}
