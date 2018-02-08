import { combineReducers } from 'redux'
import increatment from "./increation"
import login from "./login"

const rootReducer = combineReducers({
  increatment,
  login
})
  
export default rootReducer