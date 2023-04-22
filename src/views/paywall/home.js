/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react'
import { CSVLink } from 'react-csv'
import { User } from 'react-feather'
import { Button, ButtonToolbar, Card, CardBody, CardHeader, Col, Row } from 'reactstrap'

export default function PayWall() {
  return (
    <Fragment>
      <div className="mt-5 container-xxl">
        <Row>
          <Col lg={6}>
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
          <Col lg={6}>
            <Card className="mb-4">
              <CardHeader>
                <span className="fw-bolder text-primary">Consultas este mês </span>
              </CardHeader>
              <CardBody>A</CardBody>
            </Card>
            <Card>
              <CardHeader>
                <span className="fw-bolder text-primary">Consultas este mês </span>
              </CardHeader>
              <CardBody>A</CardBody>
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
          <Col lg={4}>
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
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardHeader>
                <span className="fw-bolder text-primary">Calendário</span>
              </CardHeader>
              <CardBody>a</CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}
