import {usersAPI} from "../api/api"

const GET_PROFILE = "profile/GET_PROFILE"

const initialState = {
	picture: "",
	name: "",
	dob: "",
	location: "",
	email: "",
	phone: "",
	registered: "",
}

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PROFILE:
			return action.profile
		default:
			return state
	}
}

export const getProfileAC = (profile) => ({type: GET_PROFILE, profile})

export const fetchProfileTC = () => {
	return (dispatch) => {
		usersAPI.getAuthProfile()
		.then(resp => {
			dispatch(getProfileAC(resp.data.results[0]))
		})
	}
}