import {usersAPI} from "../api/api"

const GET_USERS = "profile/GET_PROFILE"

const initialState = {}

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USERS:
			return action.profile
		default:
			return state
	}
}

export const getProfileAC = (profile) => ({type: GET_USERS, profile})

export const fetchUsersTC = () => {
	return (dispatch) => {
		usersAPI.getAuthProfile()
		.then(resp => {
			// console.log(resp)
			dispatch(getProfileAC(resp.data.results[0]))
		})
	}
}