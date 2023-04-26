/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import toast from 'react-hot-toast'

const Custom = ({ message }) => {
  const [show, setShow] = useState(true)

  return (
    <Modal className="modal-dialog-centered" isOpen={show}>
      <ModalHeader className="text-danger">Ops...</ModalHeader>
      <ModalBody>
        {message ? (
          Array.isArray(message) ? (
            message.map((err, index) => {
              return <li key={index}>{err}</li>
            })
          ) : (
            <span className="h5">{message}</span>
          )
        ) : null}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => setShow(false)}>
          Ok
        </Button>
      </ModalFooter>
    </Modal>
  )
}
const CustomSuccess = ({ message }) => {
  const [show, setShow] = useState(true)

  return (
    <Modal className="modal-dialog-centered" isOpen={show}>
      <ModalHeader className="text-success">Sucesso!</ModalHeader>
      <ModalBody>
        {message ? (
          Array.isArray(message) ? (
            message.map((err, index) => {
              return <li key={index}>{err}</li>
            })
          ) : (
            <span className="h5">{message}</span>
          )
        ) : null}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => setShow(false)}>
          Ok
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export const show = {
  error: (message) => {
    toast.custom(<Custom message={message}></Custom>)
  },
  success: (success) => {
    toast.custom(<CustomSuccess message={success}></CustomSuccess>)
  },
  toast: (message, color) => {
    toast.success(
      <span
        className={`text-${color ? color : 'success'}  p-0 m-0 d-flex flex-row align-items-center`}>
        {message}
      </span>
    )
  }
}
