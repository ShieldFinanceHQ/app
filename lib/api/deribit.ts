import axios from 'axios'
import { axiosDefaultConfig } from '../api'

export default axios.create({
  ...axiosDefaultConfig,
  baseURL: process.env.DERIBIT_API_URL,
  timeout: 30 * 60 * 1000, // Deribit requests require longer timeouts
})
