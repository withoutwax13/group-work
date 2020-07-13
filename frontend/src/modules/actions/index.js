import { LOG_CLIENT, UNLOG_CLIENT } from '../actionTypes'

export const logClient = () => {
	return {
		type: LOG_CLIENT
	}
}

export const unlogClient = () => {
	return {
		type: UNLOG_CLIENT
	}
}