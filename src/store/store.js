import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"

import {profileReducer} from "./profile-reducer"
import {loginReducer} from "./login-reducer"
import {usersReducer} from "./users-reducer"

const rootReducer = combineReducers({
	authStatus: loginReducer,
	profile: profileReducer,
	users: usersReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

window.store = store