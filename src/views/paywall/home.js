/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from 'react'
import { ArrowRight, Menu, Save, User, X } from 'react-feather'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row
} from 'reactstrap'
import { useCookies } from 'react-cookie'
import { capitalizeFirstLetter } from '../../services/ordinary'
import { useDispatch, useSelector } from 'react-redux'
import { BsPeople } from 'react-icons/bs'
import { createPatient, setFieldsValues } from './store'
import { show } from '../../@core/components/modals/utils'

export default function PayWall() {
  const dispatch = useDispatch()

  const sidebarResponsive = useSelector((state) => state.user.sidebar_responsive)

  const fieldsValues = useSelector((state) => state.paywall.fields)

  const [isOpen, setIsOpen] = useState(false)

  const [cookies] = useCookies(['token'])

  const user = cookies['token']

  const onChange = (field, value) => {
    dispatch(
      setFieldsValues({
        field,
        value
      })
    )
  }

  const handleCreatePatient = () => {
    dispatch(createPatient({ ...fieldsValues }))
    setIsOpen(false)
  }

  return (
    <Fragment>
      <Modal isOpen={isOpen} centered>
        <ModalHeader className="me-2 p-0 d-flex flex-row justify-content-end">
          <X
            role="button"
            size={20}
            className="position-absolute"
            style={{ top: '10px', right: '10px', zIndex: '1000' }}
            onClick={() => setIsOpen(false)}
          />
        </ModalHeader>
        <ModalBody>
          <div className="d-flex flex-row justify-content-center">
            <span className="text-primary h5 text-center w-100">Cadastro de paciente</span>
          </div>
          <div className="px-2">
            <Label>CPF</Label>
            <Input onChange={(e) => onChange('cpf', e.target.value)} className="mb-1" />
            <Label>Nome</Label>
            <Input onChange={(e) => onChange('name', e.target.value)} className="mb-1" />
            <Label>Email</Label>
            <Input onChange={(e) => onChange('email', e.target.value)} className="mb-1" />
            <Label>Telefone</Label>
            <Input onChange={(e) => onChange('phone', e.target.value)} className="mb-1" />
            <Label>Endereço</Label>
            <Input onChange={(e) => onChange('address', e.target.value)} className="mb-1" />
            <Label>Preço</Label>
            <Input onChange={(e) => onChange('price', e.target.value)} />
            <div className="d-flex flex-row justify-content-end w-100">
              <Button className="mt-4 " color="primary" onClick={() => handleCreatePatient()}>
                <span className="">Cadastrar </span>
                <Save size={20} />
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
      <div className="mt-2 container-xxl">
        {!sidebarResponsive && (
          <Row>
            <span className="h3 text-primary">
              Bem vindo {capitalizeFirstLetter(user.username)} !
            </span>
          </Row>
        )}
        <Row>
          <Col lg={6} className=" mb-4">
            <Card className="h-100">
              <CardHeader>
                <span className="fw-bolder text-primary">Sua próxima consulta</span>
              </CardHeader>
              <CardBody className="text-primary d-flex align-items-center justify-content-center">
                <User size={100}></User>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <span className="h2 ms-2">João dos Santos</span>
                  <span>(55) 5555 - 5555</span>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg={2} className=" mb-4">
            <Card className="h-100">
              <CardHeader>
                <span className="fw-bolder text-primary">Total de pacientes</span>
              </CardHeader>
              <CardBody className="text-primary d-flex flex-column align-items-center justify-content-center">
                <BsPeople size={40} />
                <span className="text-primary fw-bolder h4 mt-2">40</span>
              </CardBody>
            </Card>
          </Col>
          <Col lg={2} className=" mb-4">
            <Card className="h-100">
              <CardHeader>
                <span className="fw-bolder text-primary"></span>
              </CardHeader>
              <CardBody className="text-primary d-flex align-items-center justify-content-center"></CardBody>
            </Card>
          </Col>
          <Col lg={2} className="mb-4">
            <Card className="h-100">
              <CardHeader>
                <span className="fw-bolder text-primary"></span>
              </CardHeader>
              <CardBody className="text-primary d-flex align-items-center justify-content-center"></CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="">
            <Card>
              <CardHeader>
                <span className="fw-bolder text-primary">Consultas do dia</span>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col className="mb-sm-0 mb-4">
                    <Card role="button" outline color="primary">
                      <CardBody className="d-flex flex-column text-center">
                        <span className="fw-bold text-primary">João</span>
                        <span className="fw-bold text-primary">14:30</span>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="mb-sm-0 mb-4">
                    <Card role="button" outline color="primary">
                      <CardBody className="d-flex flex-column text-center">
                        <span className="fw-bold text-primary">Maria</span>
                        <span className="fw-bold text-primary">15:30</span>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="mb-sm-0 mb-4">
                    <Card role="button" outline color="primary">
                      <CardBody className="d-flex flex-column text-center">
                        <span className="fw-bold text-primary">Paula</span>
                        <span className="fw-bold text-primary">16:30</span>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="mb-sm-0 mb-4">
                    <Card role="button" outline color="primary">
                      <CardBody className="d-flex flex-column text-center">
                        <span className="fw-bold text-primary">Cleber</span>
                        <span className="fw-bold text-primary">17:30</span>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="mb-sm-0 mb-4">
                    <Card role="button" outline color="primary">
                      <CardBody className="d-flex flex-column text-center">
                        <span className="fw-bold text-primary">Ronaldo</span>
                        <span className="fw-bold text-primary">18:30</span>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="mb-sm-0 mb-4">
                    <Card role="button" outline color="primary">
                      <CardBody className="d-flex flex-column text-center">
                        <span className="fw-bold text-primary">Pedro</span>
                        <span className="fw-bold text-primary">19:30</span>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={4} className="mb-4">
            <Card>
              <CardHeader>
                <span className="fw-bolder text-primary">Opções</span>
              </CardHeader>
              <CardBody>
                <div className="d-flex flex-column px-5">
                  <Button
                    className="mb-2"
                    color="primary"
                    size="sm"
                    onClick={() => show.toast('Criado com sucesso!', 'success')}
                  >
                    Marcar Paciente
                  </Button>
                  <Button className="mb-2" size="sm" color="primary">
                    Desmarcar Paciente
                  </Button>
                  <Button color="primary" size="sm" onClick={() => setIsOpen(!isOpen)}>
                    Cadastrar Paciente
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-4">
            <Card>
              <CardHeader>
                <span className="fw-bolder text-primary">Consultas no dia</span>
              </CardHeader>
              <CardBody></CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}
