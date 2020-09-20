import React, {useState} from "react"

export const Login = React.memo((props) => {

	//Local state for inputs
	const [credential, setCredential] = useState({
		username: "",
		password: "",
	})

	const usernameHandler = (event) => {
		props.authAlertTracking(false)
		const username = event.currentTarget.value
		setCredential(prev => {
			return {
				...prev,
				username,
			}
		})
	}

	const passwordHandler = (event) => {
		props.authAlertTracking(false)
		const password = event.currentTarget.value
		setCredential(prev => {
			return {
				...prev,
				password,
			}
		})
	}

	const loginButtonHandler = () => {
		props.checkAuth(credential)
		setCredential({
			username: "",
			password: "",
		})
	}

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