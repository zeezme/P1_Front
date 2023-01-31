import React, { useEffect } from 'react'
import { ArrowRight } from 'react-feather'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Input, Label, Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setFieldsValues, signin } from './store'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const dispatch = useDispatch()

  const loginFields = useSelector((state) => state.login.fields)

  const isLogged = useSelector((state) => state.login.login)

  const user = localStorage.getItem('user')

  const navigate = useNavigate()

  useEffect(() => {
    if (user !== null) {
      console.log('a')
      navigate('/paywall')
      window.location.reload()
    }
  }, [isLogged])

  const onChange = (field, value) => {
    dispatch(
      setFieldsValues({
        field,
        value
      })
    )
  }

  const submit = () => {
    dispatch(signin(loginFields))
  }

  return (
    <>
      <Row className="d-flex justify-content-center">
        <Col lg={4}>
          <Card className="mt-5">
            <CardHeader className="text-center bg-success">
              <p className="m-0 h4 text-light">Entrar</p>
            </CardHeader>
            <CardBody>
              <Label>Email</Label>
              <Input
                onChange={(e) => {
                  onChange('email', e.target.value)
                }}></Input>
              <Label className="mt-3">Senha</Label>
              <Input
                type="password"
                name="password"
                onChange={(e) => onChange('password', e.target.value)}></Input>
            </CardBody>
            <CardFooter className="d-flex justify-content-end">
              <Button color="success" onClick={submit}>
                <ArrowRight className="text-light" />
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </>
  )
}
