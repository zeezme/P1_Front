import React, { useEffect } from 'react'
import { ArrowRight } from 'react-feather'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Input, Label, Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setFieldsValues, setUser } from './store'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

import axios from 'axios'

export default function Login() {
  const [cookies, setCookie] = useCookies(['token'])
  const dispatch = useDispatch()

  const loginFields = useSelector((state) => state.login.fields)

  const user = cookies['token']

  const navigate = useNavigate()

  useEffect(() => {
    if (user !== undefined) {
      navigate('/paywall')
      window.location.reload()
    }
  }, [user])

  const onChange = (field, value) => {
    dispatch(
      setFieldsValues({
        field,
        value
      })
    )
  }

  const submit = async () => {
    const res = await axios.post('http://localhost:8080/api/auth/signin', {
      username: loginFields.email,
      password: loginFields.password
    })
    if (res.status === 200) {
      setCookie('token', res.data)

      dispatch(setUser(res.data))
      return res.data
    }
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
