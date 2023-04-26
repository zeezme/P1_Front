import user from './user'
import home from '../views/home/store/index'
import login from '../views/login/store'
import paywall from '../views/paywall/store'

const rootReducer = {
  user,
  home,
  login,
  paywall
}

export default rootReducer
