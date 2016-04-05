import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import property from './property'
import { createModelReducer, formReducer } from 'react-redux-form'
import config from '../../config'

export default combineReducers({
  routing,
  property,
  propertyForm: formReducer(config.propertyReduxModelName)
})
