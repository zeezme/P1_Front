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
import LoginSvg from '../../@core/components/LoginSvg'

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
    <div className="d-flex flex-row justify-content-center align-items-start m-5 container-xxl">
      <Card className="" style={{ width: '300px' }}>
        <CardBody>
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
            <Button color="success" className="w-100 mt-3" onClick={submit}>
              {loading ? <Spinner size="sm" /> : <ArrowRight className="text-light" />}
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}
