import React from "react"

import {User} from "./User"

export const Users = React.memo((props) => {

	const users = props.users.map(u => <User key={u.id}
											 picture={u.picture}
											 name={u.name}
											 address={u.address}
											 email={u.email}
											 number={u.number}/>)

	return (
		<div>
			{users}
			Юзеры
		</div>
	)
})