import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"

import {profileReducer} from "./profile-reducer"
import {loginReducer} from "./login-reducer"

const rootReducer = combineReducers({
	profile: profileReducer,
	authStatus: loginReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

window.store = store