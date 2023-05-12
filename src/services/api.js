import axios from 'axios'
import Cookies from 'universal-cookie'
import { show } from '../@core/components/modals/utils'

const cookies = new Cookies()
const token = cookies.get('token')
// eslint-disable-next-line no-undef
const apiAddress = process.env.REACT_APP_URL_API
// eslint-disable-next-line no-undef
const apiPort = process.env.REACT_APP_URL_API_PORT

const instance = axios.create({
  baseURL: `http://${apiAddress}:${apiPort}/api`,
  timeout: 8000,
  headers: {
    'x-access-token': token?.accessToken
  }
})

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Aqui você pode tratar o erro como quiser
    return show.error(error.response.data.message)
  }
)

const Api = {
  get: async (route) => {
    const response = await instance.get(route)
    return response
  },
  post: async (route, data) => {
    const response = await instance.post(route, data)
    return response
  }
}

export default Api
