import React from "react"

import {User} from "./User"

export const Users = React.memo((props) => {

	const users = props.users.map(u => <User key={u.cell}
											 picture={u.picture.medium}
											 name={u.name.first}
											 address={u.location.city}
											 email={u.email}
											 number={u.phone}/>)


	const showNextPageHandler = () => {
		let newCurrentPage = props.currentPage
		props.showNextPage(newCurrentPage+1)
	}

	return (
		<div>
			{users}
			<button onClick={showNextPageHandler}>Показать еще</button>
			Юзеры
		</div>
	)
})