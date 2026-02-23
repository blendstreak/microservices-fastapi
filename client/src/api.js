import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 5000,

})

export default axiosClient
