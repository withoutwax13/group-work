import { LOG_CLIENT, UNLOG_CLIENT, TOGGLE_MOBILE_TAB } from '../actionTypes'

export const unlogClient = () => {
	return {
		type: UNLOG_CLIENT,
		payload: {
			isSignedIn: false,
			signedInId: null,
			signedInName: null,
			signedInEmail: null,
			signedInImageUrl: null
		}
	}
}

export const logClient = (id, name, email, imageURL) => {
	return {
		type: LOG_CLIENT,
		payload: {
			isSignedIn: true,
			signedInId: id,
			signedInName: name,
			signedInEmail: email,
			signedInImageUrl: imageURL
		}
	}
}

export const toggleMobileTab = () => {
	return {
		type: TOGGLE_MOBILE_TAB
	}
}