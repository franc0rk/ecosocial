import axios from 'axios'
import oauth from 'src/services/oauth'

export default ({ Vue }) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${oauth.getAuthToken()}`

  Vue.prototype.$axios = axios
}
