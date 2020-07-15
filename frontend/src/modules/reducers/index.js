import { combineReducers } from 'redux'
import { LOG_CLIENT, UNLOG_CLIENT } from '../actionTypes'
import { CLIENT_LOG_INITIAL } from './INITIAL_STATE'

const CLIENT_LOG_REDUCER = (state = CLIENT_LOG_INITIAL, action) => {
	if (action.type === LOG_CLIENT){
		window.localStorage.setItem('token', action.payload)
		return action.payload
	} else if (action.type === UNLOG_CLIENT){
		window.localStorage.removeItem('token')
		return action.payload
	}
	return state
}

export default combineReducers({
	CLIENT_LOG_DATA: CLIENT_LOG_REDUCER
})