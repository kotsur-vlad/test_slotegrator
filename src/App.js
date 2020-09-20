import React, {useEffect, useState} from "react"
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom"

import "./App.css"
import {Main} from "./Main"
import {Login} from "./Login"
import {Navbar} from "./Navbar"
import {Profile} from "./Profile"
import {Users} from "./Users"

function App () {
	//State
	const [authStatus, setAuthStatus] = useState(null)
	const [authAlert, setAuthAlert] = useState(false)
	//Auth data
	const demoCredential = {
		username: "Admin",
		password: "12345",
	}
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

	//Side effects
	useEffect(() => {
		const authStatus = JSON.parse(localStorage.getItem("isAuth"))
		if (authStatus === null) {
			localStorage.setItem("isAuth", "false")
			setAuthStatus(false)
		} else {
			setAuthStatus(authStatus)
		}
	}, [])


	//Methods
	const checkAuth = (credential) => {
		if (JSON.stringify(demoCredential) === JSON.stringify(credential)) {
			localStorage.setItem("isAuth", "true")
			setAuthStatus(true)
		} else {
			localStorage.setItem("isAuth", "false")
			setAuthAlert(true)
		}
	}

	const authAlertTracking = (status) => {
		setAuthAlert(status)
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
							{authStatus ? <Profile/> : <Redirect to="/login"/>}
						</Route>
						<Route path={"/users"}>
							<Users users={users}/>
						</Route>
						<Route path={"/login"}>
							{!authStatus ? <Login checkAuth={checkAuth}
												  authAlert={authAlert}
												  authAlertTracking={authAlertTracking}/>
								: <Redirect to="/profile"/>}
						</Route>
					</div>
				</Switch>
			</div>
		</Router>
	)
}

export default App
