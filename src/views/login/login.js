import React, { useEffect, useState } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
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
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

import axios from 'axios'
import { ImLeaf } from 'react-icons/im'
import { show } from '../../@core/components/modals/utils'

export default function Login() {
  // eslint-disable-next-line no-undef
  const apiAddress = process.env.REACT_APP_URL_API
  // eslint-disable-next-line no-undef
  const apiPort = process.env.REACT_APP_URL_API_PORT

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
    if (apiAddress === undefined || apiPort === undefined) {
      show.error('Servidor não foi instalado corretamente, por favor verifique o env.')
      return
    }
    setLoading(true)
    try {
      const res = await axios.post(`http://${apiAddress}:${apiPort}/api/auth/signin`, {
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
      if (error.code === 'ERR_NETWORK') {
        setLoading(false)
        show.error('Falha ao conectar ao servidor, por favor tente novamente mais tarde.')
      }
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
    <Row
      className="d-flex justify-content-center align-items-center m-0"
      style={{ height: '100vh', width: '100%' }}>
      <Col lg={4} md={8} className="p-0">
        <Card>
          <CardBody>
            <div className="d-flex flex-row justify-content-center text-primary mt-5">
              <span className="h1 fw-bolder">LEAF</span>
              <ImLeaf className="ms-3" size={45} />
            </div>
            <div className="d-flex flex-row justify-content-center mt-2 mb-5">
              <small>Acesso ao sistema</small>
            </div>
            <Form className="mx-5">
              <FormGroup>
                <Label for="user" className="text-primary">
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
                <Label for="password" className="text-primary">
                  Senha
                </Label>
                <Input
                  {...loginErrorPass}
                  type="password"
                  name="password"
                  onChange={(e) => onChange('password', e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === 'NumpadEnter') {
                      submit()
                    }
                  }}
                />
                <FormFeedback>Senha invalida!</FormFeedback>
              </FormGroup>
              <Button color="success" className="w-100 mt-3" onClick={submit}>
                {loading ? <Spinner size="sm" /> : <span className="fw-bold">Acessar</span>}
              </Button>
              <div className="d-flex flex-row justify-content-center mt-5">
                <span>Precisar de ajuda?</span>
                <span className="link-success ms-1 cursor-pointer"> Clique aqui</span>
              </div>
            </Form>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
        <div className="d-flex flex-row justify-content-end mt-2">
          <Button color="" tag={Link} to="/" className="text-primary fw-bolder">
            Voltar
          </Button>
        </div>
      </Col>
    </Row>
  )
}
