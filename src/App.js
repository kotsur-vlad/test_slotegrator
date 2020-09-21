import React, {useEffect} from "react"
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

function App () {
	const dispatch = useDispatch()
	const profile = useSelector(state => state.profile)
	const authStatus = useSelector(state => state.authStatus.status)
	const authAlert = useSelector(state => state.authStatus.alert)


	//Users
	const users = [
		{
			id: "1",
			name: "1",
			email: "2",
			address: "4",
			number: "5",
			picture: "6",
		},
		{
			id: "2",
			name: "1",
			email: "2",
			address: "4",
			number: "5",
			picture: "6",
		},
	]


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

	//Check credentials from login's inputs
	const checkAuth = (credential) => {
		dispatch(checkAuthStatusAC(credential))
	}

	//Tracking alert display's status, when incorrect credential was entered
	const alertTracking = () => {
		dispatch(denyAuthAlertAC())
	}


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
							<Users users={users}/>
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
