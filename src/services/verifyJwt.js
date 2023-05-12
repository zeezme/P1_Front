import axios from 'axios'
import Cookies from 'universal-cookie'

export const verifyJwt = async () => {
  const cookies = new Cookies()
  const userData = cookies.get('token')
  // eslint-disable-next-line no-undef
  const apiAddress = process.env.REACT_APP_URL_API
  // eslint-disable-next-line no-undef
  const apiPort = process.env.REACT_APP_URL_API_PORT

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]))
    } catch (e) {
      return null
    }
  }

  const api = axios.create({
    baseURL: `http://${apiAddress}:${apiPort}/api/test`,
    timeout: 8000,
    headers: {
      'x-access-token': userData?.accessToken
    }
  })

  if (userData) {
    try {
      const decodedJwt = parseJwt(userData?.accessToken)
      if (decodedJwt.exp * 1000 < Date.now()) {
        cookies.remove('token')
      }

      const res = await api.get('/user')

      return { status: res.status, message: 'Authorized' }
    } catch (error) {
      return { status: error.response.status, message: 'Unauthorized' }
    }
  } else {
    return { status: 440, message: 'Unauthorized' }
  }
}
