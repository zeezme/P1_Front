import axios from 'axios'

const Api = (token) => {
  axios.create({
    baseURL: 'http://localhost:8080/api/test',
    timeout: 8000,
    headers: {
      'x-access-token': token
    }
  })
}

export default Api
