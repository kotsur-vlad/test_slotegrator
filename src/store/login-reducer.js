import {demoCredential} from "../demoCredential"

const CHECK_AUTH_STATUS = "login/CHECK_AUTH_STATUS"
const GET_LOCAL_AUTH_STATUS = "login/GET_LOCAL_AUTH_STATUS"
const DENY_AUTH_ALERT = "login/DENY_AUTH_ALERT"
const LOGOUT = "login/LOGOUT"

const initialState = {
	alert: false,
	status: null,
}

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHECK_AUTH_STATUS:
			if (JSON.stringify(demoCredential) === JSON.stringify(action.credential)) {
				localStorage.setItem("isAuth", "true")
				return {
					alert: false,
					status: true,
				}
			} else {
				localStorage.setItem("isAuth", "false")
				return {
					alert: true,
					status: false,
				}
			}
		case GET_LOCAL_AUTH_STATUS:
			const localAuthStatus = JSON.parse(localStorage.getItem("isAuth"))
			if (localAuthStatus === true) {
				return {
					alert: false,
					status: true,
				}
			} else {
				localStorage.setItem("isAuth", "false")
				return {
					alert: false,
					status: false,
				}
			}
		case DENY_AUTH_ALERT:
			return {
				...state,
				alert: false,
			}
		case LOGOUT:
			localStorage.setItem("isAuth", "false")
			return {
				alert: false,
				status: false,
			}
		default:
			return state
	}
}

export const checkAuthStatusAC = (credential) => ({type: CHECK_AUTH_STATUS, credential})
export const getLocalAuthStatusAC = () => ({type: GET_LOCAL_AUTH_STATUS})
export const denyAuthAlertAC = () => ({type: DENY_AUTH_ALERT})
export const logoutAC = () => ({type: LOGOUT})
