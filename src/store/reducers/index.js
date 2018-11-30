import {combineReducers} from "redux"
import updateUser from './user'

export default combineReducers({
  user:updateUser,
})
