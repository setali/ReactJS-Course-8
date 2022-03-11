import axios from 'axios'
import { getToken } from './utils'
import { BASE_URL } from './constants'

const request = axios.create({
  baseURL: BASE_URL
})

request.interceptors.request.use(
  function (config) {
    const token = getToken()

    if (token) {
      config.headers.authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

export default request
