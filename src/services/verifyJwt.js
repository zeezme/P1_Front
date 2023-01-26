import axios from 'axios'

export const verifyJwt = async () => {
  const userData = JSON.parse(localStorage.getItem('user'))

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]))
    } catch (e) {
      return null
    }
  }

  const Api = axios.create({
    baseURL: 'http://localhost:8080/api/test',
    timeout: 8000,
    headers: {
      'x-access-token': userData?.accessToken
    }
  })

  if (userData) {
    try {
      const decodedJwt = parseJwt(userData?.accessToken)
      if (decodedJwt.exp * 1000 < Date.now()) {
        localStorage.removeItem('user')
      }

      const res = await Api.get('/user')

      return { status: res.status, message: 'Authorized' }
    } catch (error) {
      return { status: error.response.status, message: 'Unauthorized' }
    }
  } else {
    return { status: 440, message: 'Unauthorized' }
  }
}
