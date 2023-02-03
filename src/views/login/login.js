/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { AlertTriangle, ArrowRight } from 'react-feather'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row
} from 'reactstrap'
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

  const [loginErrorUser, setLoginErrorUser] = useState({ invalid: false })
  const [loginErrorPass, setLoginErrorPass] = useState({ invalid: false })

  const submit = async () => {
    try {
      const res = await axios.post('http://localhost:8080/api/auth/signin', {
        username: loginFields.email,
        password: loginFields.password
      })
      if (res.status === 200) {
        setCookie('token', res.data)
        dispatch(setUser(res.data))
        return res.data
      }
    } catch (error) {
      if (error.response.data.message === 'User Not found.') {
        setLoginErrorUser({ invalid: true })
      }
      if (error.response.data.message === 'Invalid Password!') {
        setLoginErrorPass({ invalid: true })
      }
    }
  }

  return (
    <>
      <Row className="d-flex justify-content-center">
        <Col lg={4}>
          <Card className="mt-5 shadow">
            <CardBody>
              <div className="container">
                <CardTitle className="h4 text-center">Entrar</CardTitle>
                <Form>
                  <FormGroup>
                    <Label for="user" className="fw-bold">
                      Usuário
                    </Label>
                    <Input
                      {...loginErrorUser}
                      name="user"
                      onChange={(e) => {
                        onChange('email', e.target.value)
                      }}
                    />
                    <FormFeedback>O nome de usuário não foi encontrado!</FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Label for="password" className="fw-bold">
                      Senha
                    </Label>
                    <Input
                      {...loginErrorPass}
                      type="password"
                      name="password"
                      onChange={(e) => onChange('password', e.target.value)}></Input>
                    <FormFeedback>Senha invalida!</FormFeedback>
                  </FormGroup>
                  <Button color="success" className="w-100" onClick={submit}>
                    <ArrowRight className="text-light" />
                  </Button>
                </Form>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}
