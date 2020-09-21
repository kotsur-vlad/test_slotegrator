import React, {useCallback, useState} from "react"

export const Login = React.memo((props) => {
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
		<div>
			<span>Логин:</span>
			<input type="text"
				   placeholder="Логин"
				   value={credential.username}
				   onChange={usernameHandler}/>
			<span>Пароль:</span>
			<input type="password"
				   placeholder="Пароль"
				   value={credential.password}
				   onChange={passwordHandler}/>
			<button onClick={loginButtonHandler}>
				Войти
			</button>
			{
				props.authAlert ? <div>Имя пользователя или пароль введены неверно</div> : null
			}
		</div>
	)
})