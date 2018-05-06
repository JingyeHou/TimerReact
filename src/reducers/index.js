import {combineReducers} from 'redux'
import todos from './todos'
import buttonVisibility from './buttonVisibility'

export default combineReducers({
    todos,
    buttonVisibility
})