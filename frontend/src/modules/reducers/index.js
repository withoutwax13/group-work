import { combineReducers } from 'redux'
import { LOG_CLIENT, UNLOG_CLIENT, TOGGLE_MOBILE_TAB, SELECT_GROUP } from '../actionTypes'
import { CLIENT_LOG_INITIAL, ACTIVE_GROUP_INITIAL } from './INITIAL_STATE'

const CLIENT_LOG_REDUCER = (state = CLIENT_LOG_INITIAL, action) => {
	if (action.type === LOG_CLIENT){
		return action.payload
	} else if (action.type === UNLOG_CLIENT){
		return action.payload
	}
	return state
}

const MOBILE_TAB_STATUS_REDUCER = (state = false, action) => {
	if (action.type === TOGGLE_MOBILE_TAB){
		return !state
	}
	return state
}

const ACTIVE_GROUP_REDUCER = (state = ACTIVE_GROUP_INITIAL, action) => {
	if (action.type === SELECT_GROUP){
		return action.payload
	}
	return state
}

export default combineReducers({
	CLIENT_LOG_DATA: CLIENT_LOG_REDUCER,
	MOBILE_TAB_STATUS: MOBILE_TAB_STATUS_REDUCER,
	ACTIVE_GROUP: ACTIVE_GROUP_REDUCER
})