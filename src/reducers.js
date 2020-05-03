import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './reducers/auth'
import common from './reducers/common'
import sale from './reducers/sale'

const createRootReducer = (history) => combineReducers({
  auth,
  common,
  sale,
  router: connectRouter(history)
})
export default createRootReducer