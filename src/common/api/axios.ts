import axios from 'axios'

export const axiosAPI = axios.create({
  baseURL: '/',
})

axiosAPI.interceptors.response.use((response) => response?.data)
