/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from 'react'
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
  Row,
  Spinner
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
  const [loading, setLoading] = useState(false)

  const submit = async () => {
    setLoading(true)
    try {
      const res = await axios.post('http://localhost:8080/api/auth/signin', {
        username: loginFields.email,
        password: loginFields.password
      })
      if (res.status === 200) {
        setLoading(false)

        setCookie('token', res.data)
        dispatch(setUser(res.data))
        return res.data
      }
    } catch (error) {
      if (error.response.data.message === 'User Not found.') {
        setLoading(false)
        setLoginErrorUser({ invalid: true })
      }
      if (error.response.data.message === 'Invalid Password!') {
        setLoading(false)
        setLoginErrorPass({ invalid: true })
      }
    }
  }

  return (
    <Fragment>
      <Row className="d-flex justify-content-center">
        <Col lg={4}>
          <Card className="mt-5 shadow-sm ">
            <CardBody>
              <div className="container">
                <CardTitle className="h4 text-center">Entrar</CardTitle>
                <Form>
                  <FormGroup>
                    <Label for="user" className="fw-bold">
                      Usu??rio
                    </Label>
                    <Input
                      {...loginErrorUser}
                      name="user"
                      onChange={(e) => {
                        onChange('email', e.target.value)
                      }}
                    />
                    <FormFeedback>O nome de usu??rio n??o foi encontrado!</FormFeedback>
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
                  <Button color="success" className="w-100 mt-3" onClick={submit}>
                    {loading ? <Spinner size="sm" /> : <ArrowRight className="text-light" />}
                  </Button>
                </Form>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
