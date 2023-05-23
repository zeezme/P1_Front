import user from './user'
import home from '../views/home/store/index'
import login from '../views/login/store'
import paywall from '../views/paywall/store'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  user,
  home,
  login,
  paywall
})

export default rootReducer
