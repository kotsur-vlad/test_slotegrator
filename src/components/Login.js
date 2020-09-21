import React, {useCallback, useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {TextField, Button} from "@material-ui/core"
import {AlertTitle, Alert} from "@material-ui/lab"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center",
		padding: "10%",
		height: "auto",
		width: "30%",
	},
	textField: {
		minHeight: "60px",
		width: "100%",
	},
})

export const Login = React.memo((props) => {
	const classes = useStyles()

	//Local state for inputs
	const [credential, setCredential] = useState({
		username: "",
		password: "",
	})

	//Handlers for inputs
	const usernameHandler = useCallback((event) => {
		props.alertTracking(false)
		const username = event.currentTarget.value
		setCredential(prev => {
			return {
				...prev,
				username,
			}
		})
	}, [props.alertTracking])
	const passwordHandler = useCallback((event) => {
		props.alertTracking(false)
		const password = event.currentTarget.value
		setCredential(prev => {
			return {
				...prev,
				password,
			}
		})
	}, [props.alertTracking])

	//Handler for credential
	const loginButtonHandler = useCallback(() => {
		props.checkAuth(credential)
		setCredential({
			username: "",
			password: "",
		})
	}, [props.checkAuth, credential])

	return (
		<div className={classes.root}>
			<TextField label="Логин: "
					   variant="outlined"
					   size="small"
					   type="text"
					   className={classes.textField}
					   error={props.authAlert}
					   value={credential.username}
					   onChange={usernameHandler}/>
			<TextField label="Пароль: "
					   variant="outlined"
					   size="small"
					   type="password"
					   className={classes.textField}
					   error={props.authAlert}
					   value={credential.password}
					   onChange={passwordHandler}/>
			<Button variant="contained"
					color="primary"
					endIcon={<ExitToAppIcon/>}
					onClick={loginButtonHandler}>
				Войти
			</Button>
			{
				props.authAlert ? <Alert severity="error"
										 style={{marginTop: "20px"}}>
					<AlertTitle>Ошибка</AlertTitle>
					Имя пользователя или пароль введены неверно
				</Alert> : null
			}
		</div>
	)
})