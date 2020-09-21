import React from "react"
import {NavLink} from "react-router-dom"

export const Navbar = React.memo(() => {
	return (
		<div>
			<NavLink to="/">
				На главную
			</NavLink>
			<NavLink to="/profile">
				Профиль
			</NavLink>
			<NavLink to="/users">
				Пользователи
			</NavLink>
		</div>
	)
})