import axios from 'axios'
import store from '@/store/modules/auth.module'

const requestAxios = axios.create({
  baseURL: process.env.VUE_APP_FB_URL
})

requestAxios.interceptors.response.use(null, error => {
  if (error.response.status === 401) {
    store.mutations.logout()
  }

  return Promise.reject(error)
})

export default requestAxios
