import React, { Fragment } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import ProductCard from '../../@core/components/productCard/productCard'

export default function Home() {
  return (
    <Fragment>
      <Row className="mt-5">
        <Col>
          <div className="d-flex flex-row justify-content-center">
            <span className="h2 text-primary">Bem vindo ao Leaf</span>
          </div>
          <div className="mt-5 d-flex flex-row justify-content-center align-items-end mb-5">
            <Col>
              <Card className="me-4" style={{ height: '270px', width: '200px' }}>
                <CardHeader>
                  <span className="h4 text-primary fw-bolder ">Plano 2</span>
                </CardHeader>
                <CardBody></CardBody>
              </Card>
            </Col>

            <Col>
              <Card className="me-4" style={{ height: '300px', width: '200px' }}>
                <CardHeader>
                  <span className="h4 text-primary fw-bolder ">Plano 1</span>
                </CardHeader>
                <CardBody></CardBody>
              </Card>
            </Col>
            <Col>
              <Card style={{ height: '270px', width: '200px' }}>
                <CardHeader>
                  <span className="h4 text-primary fw-bolder ">Plano 3</span>
                </CardHeader>
                <CardBody></CardBody>
              </Card>
            </Col>
          </div>
        </Col>
        <Col className="d-flex flex-row align-items-center justify-content-center mb-5">
          <Card className="h-100">
            <CardHeader>
              ___________________________________________________________________
            </CardHeader>
            <CardBody></CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
