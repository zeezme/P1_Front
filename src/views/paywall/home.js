/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react'
import { User } from 'react-feather'
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { useCookies } from 'react-cookie'
import { capitalizeFirstLetter } from '../../services/ordinary'
import { useDispatch, useSelector } from 'react-redux'
import { BsPeople } from 'react-icons/bs'
import { test } from './store'

export default function PayWall() {
  const dispatch = useDispatch()

  const sidebarResponsive = useSelector((state) => state.user.sidebar_responsive)

  const [cookies] = useCookies(['token'])

  const user = cookies['token']

  return (
    <Fragment>
      <div className="mt-2 container-xxl">
        {!sidebarResponsive && (
          <Row>
            <span className="h3 text-primary">
              Bem vindo {capitalizeFirstLetter(user.username)} !
            </span>
          </Row>
        )}
        <Row>
          <Col lg={6} className="mt-lg-4">
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
          <Col lg={2} className="mt-lg-4">
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
          <Col lg={2} className="mt-lg-4">
            <Card className="h-100">
              <CardHeader>
                <span className="fw-bolder text-primary"></span>
              </CardHeader>
              <CardBody className="text-primary d-flex align-items-center justify-content-center"></CardBody>
            </Card>
          </Col>
          <Col lg={2} className="mt-lg-4">
            <Card className="h-100">
              <CardHeader>
                <span className="fw-bolder text-primary"></span>
              </CardHeader>
              <CardBody className="text-primary d-flex align-items-center justify-content-center"></CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="mt-4">
            <Card>
              <CardHeader>
                <span className="fw-bolder text-primary">Sua próxima consulta</span>
              </CardHeader>
              <CardBody>B</CardBody>
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
                  <Button className="mb-2" color="primary">
                    Marcar Paciente
                  </Button>
                  <Button className="mb-2" color="primary">
                    Desmarcar Paciente
                  </Button>
                  <Button color="primary">Cadastrar Paciente</Button>
                  <Button color="primary mt-2" onClick={() => dispatch(test('teste'))}>
                    Testar Paciente
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
