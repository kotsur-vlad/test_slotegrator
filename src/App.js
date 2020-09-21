import React, {useCallback, useEffect} from "react"
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"

import "./App.css"
import {Main} from "./components/Main"
import {Login} from "./components/Login"
import {Navbar} from "./components/Navbar"
import {Profile} from "./components/Profile"
import {Users} from "./components/Users"
import {fetchProfileTC} from "./store/profile-reducer"
import {checkAuthStatusAC, denyAuthAlertAC, getLocalAuthStatusAC} from "./store/login-reducer"
import {fetchUsersTC, setCurrentPageAC} from "./store/users-reducer"

function App () {
	const dispatch = useDispatch()
	const profile = useSelector(state => state.profile)
	const authStatus = useSelector(state => state.authStatus.status)
	const authAlert = useSelector(state => state.authStatus.alert)
	const users = useSelector(state => state.users)

	//Receive local auth status
	useEffect(() => {
		dispatch(getLocalAuthStatusAC())
	}, [dispatch])

	//Receive authorized profile
	useEffect(() => {
		if (authStatus) {
			dispatch(fetchProfileTC())
		}
	}, [dispatch, authStatus])

	//Receive list of users
	useEffect(() => {
		dispatch(fetchUsersTC(users.currentPage))
	}, [dispatch])

	//Check credentials from login's inputs
	const checkAuth = useCallback((credential) => {
		dispatch(checkAuthStatusAC(credential))
	}, [dispatch])

	//Tracking alert display's status, when incorrect credential was entered
	const alertTracking = useCallback(() => {
		dispatch(denyAuthAlertAC())
	}, [dispatch])

	const showNextPage = useCallback((newCurrentPage) => {
		dispatch(setCurrentPageAC(newCurrentPage))
		dispatch(fetchUsersTC(newCurrentPage))
	}, [dispatch])

	return (
		<Router>
			<div className="appWrapper">
				<Navbar/>
				<Switch>
					<div className="container">
						<Route exact
							   path={"/"}>
							<Main/>
						</Route>
						<Route path={"/profile"}>
							{authStatus ? <Profile profile={profile}/> : <Redirect to="/login"/>}
						</Route>
						<Route path={"/users"}>
							<Users users={users.users}
								   currentPage={users.currentPage}
								   showNextPage={showNextPage}/>
						</Route>
						<Route path={"/login"}>
							{!authStatus ? <Login checkAuth={checkAuth}
												  authAlert={authAlert}
												  alertTracking={alertTracking}/>
								: <Redirect to="/profile"/>}
						</Route>
					</div>
				</Switch>
			</div>
		</Router>
	)
}

export default App
