import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()
const token = cookies.get('token')

const Api = {
  get: async (route) => {
    const instance = axios.create({
      baseURL: `http://localhost:8080/api${route}`,
      timeout: 8000,
      headers: {
        'x-access-token': token.accessToken
      }
    })
    const response = await instance.get()
    return response
  }
}

export default Api
