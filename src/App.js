import React, {useCallback, useEffect} from "react"
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {makeStyles} from "@material-ui/core/styles"
import {Paper} from "@material-ui/core"

import {Main} from "./components/Main"
import {Login} from "./components/Login"
import {Navbar} from "./components/Navbar"
import {Profile} from "./components/Profile"
import {Users} from "./components/Users"
import {fetchProfileTC} from "./store/profile-reducer"
import {checkAuthStatusAC, denyAuthAlertAC, getLocalAuthStatusAC, logoutAC} from "./store/login-reducer"
import {fetchUsersTC, setCurrentPageAC} from "./store/users-reducer"

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		minHeight: "100vh",
	},
	container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		position: "absolute",
		padding: "3%",
		top: "9vh",
		minHeight: "50%",
		height: "auto",
		width: "70%",
	},
})

function App () {
	const classes = useStyles()
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

	//Logout from profile
	const logout = useCallback(() => {
		dispatch(logoutAC())
	}, [dispatch])

	//Display next page of user's list
	const showNextPage = useCallback((newCurrentPage) => {
		dispatch(setCurrentPageAC(newCurrentPage))
		dispatch(fetchUsersTC(newCurrentPage))
	}, [dispatch])

	return (
		<Router>
			<div className={classes.root}>
				<Navbar/>
				<Switch>
					<Paper elevation={3}
						   variant="elevation"
						   className={classes.container}>
						<Route exact
							   path={"/"}>
							<Main/>
						</Route>
						<Route path={"/profile"}>
							{authStatus ? <Profile profile={profile}
												   logout={logout}/> : <Redirect to="/login"/>}
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
					</Paper>
				</Switch>
			</div>
		</Router>
	)
}

export default App
