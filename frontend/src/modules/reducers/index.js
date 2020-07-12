import { combineReducers } from 'redux'
import { LOG_CLIENT, UNLOG_CLIENT } from '../actionTypes'
import { CLIENT_LOG_INITIAL } from './INITIAL_STATE'

const CLIENT_LOG_REDUCER = (state = CLIENT_LOG_INITIAL, action) => {
	if (action.type === LOG_CLIENT){
		return true
	} else if (action.type === UNLOG_CLIENT){
		return false
	}
	return state
}

export default combineReducers({
	IS_CLIENT_LOGGED: CLIENT_LOG_REDUCER
})