const BASE_URL = 'http://localhost:8000/'

const API_URL = BASE_URL + 'api/'

export default {
  CLIENT_ID: 1,
  CLIENT_GRANT_TYPE: 'password',
  CLIENT_SECRET: 'y2y5DYGncueenlMe8Yp2rrTNsE23HbHBTSLeJdiU',

  TOKEN_URL: BASE_URL + 'oauth/token',
  USERS_URL: API_URL + 'users/',
  POSTS_URL: API_URL + 'posts/'
}
