import React, { Fragment } from 'react'
import { Col, Row } from 'reactstrap'
import { ImLeaf } from 'react-icons/im'

export default function Home() {
  return (
    <Fragment>
      <Row className="mt-5">
        <Col>
          <div className="d-flex flex-row justify-content-center">
            <span className="h2 text-primary">
              Bem vindo ao Leaf <ImLeaf className="ms-1" />
            </span>
          </div>
        </Col>
      </Row>
    </Fragment>
  )
}
