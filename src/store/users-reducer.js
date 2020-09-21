import {usersAPI} from "../api/api"

const GET_USERS = "profile/GET_USERS"
const SET_CURRENT_PAGE = "profile/SET_CURRENT_PAGE"

const initialState = {
	users: [],
	currentPage: 1,
}

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				users: [
					...state.users,
					...action.users,
				],
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.newCurrentPage
			}
		default:
			return state
	}
}

export const getUsersAC = (users) => ({type: GET_USERS, users})
export const setCurrentPageAC = (newCurrentPage) => ({type: SET_CURRENT_PAGE, newCurrentPage})

export const fetchUsersTC = (currentPage) => {
	return (dispatch) => {
		usersAPI.getUsers(currentPage)
		.then(resp => {
			console.log(resp.data.results[0])
			dispatch(getUsersAC(resp.data.results))
		})
	}
}
