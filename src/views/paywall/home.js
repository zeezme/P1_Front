/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react'
import { CSVLink } from 'react-csv'
import { User } from 'react-feather'
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap'

export default function PayWall() {
  const headers = [
    { label: 'First Name', key: 'firstName' },
    { label: 'Last Name', key: 'lastName' },
    { label: 'Email', key: 'email' },
    { label: 'Age', key: 'age' }
  ]

  const data = [
    { firstName: 'Warren', lastName: 'Morrow', email: 'sokyt@mailinator.com', age: '36' },
    { firstName: 'Gwendolyn', lastName: 'Galloway', email: 'weciz@mailinator.com', age: '76' },
    { firstName: 'Astra', lastName: 'Wyatt', email: 'quvyn@mailinator.com', age: '57' },
    { firstName: 'Jasmine', lastName: 'Wong', email: 'toxazoc@mailinator.com', age: '42' },
    { firstName: 'Brooke', lastName: 'Mcconnell', email: 'vyry@mailinator.com', age: '56' },
    { firstName: 'Christen', lastName: 'Haney', email: 'pagevolal@mailinator.com', age: '23' },
    { firstName: 'Tate', lastName: 'Vega', email: 'dycubo@mailinator.com', age: '87' },
    { firstName: 'Amber', lastName: 'Brady', email: 'vyconixy@mailinator.com', age: '78' },
    { firstName: 'Philip', lastName: 'Whitfield', email: 'velyfi@mailinator.com', age: '22' },
    { firstName: 'Kitra', lastName: 'Hammond', email: 'fiwiloqu@mailinator.com', age: '35' },
    { firstName: 'Charity', lastName: 'Mathews', email: 'fubigonero@mailinator.com', age: '63' }
  ]

  const csvReport = {
    data,
    headers,
    filename: 'teste.csv'
  }

  return (
    <Fragment>
      <div className="container-xxl mt-5">
        <Row>
          <Col lg={6}>
            <Card>
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
            <Card>
              <CardHeader>
                <span className="fw-bolder text-primary">Consultas este mês </span>
              </CardHeader>
              <CardBody>A</CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}
