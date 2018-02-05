import { combineReducers } from 'redux'
import { reducer as weatherApp } from '../app/reducer'

const rootReducer = combineReducers({
  weatherApp,
})

export default rootReducer
