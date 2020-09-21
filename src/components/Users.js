import React, {useCallback} from "react"
import {Button} from "@material-ui/core"

import {User} from "./User"

export const Users = React.memo((props) => {
	//Handling next page value of user's lists
	const showNextPageHandler = useCallback(() => {
		let newCurrentPage = props.currentPage
		props.showNextPage(newCurrentPage + 1)
	}, [props.currentPage, props.showNextPage])

	const users = props.users.map(u => <User key={u.cell}
											 picture={u.picture.medium}
											 nameFirst={u.name.first}
											 nameLast={u.name.last}
											 age={u.dob.age}
											 city={u.location.city}
											 country={u.location.country}/>)

	return (
		<div>
			{users}
			<Button variant="outlined"
					color="primary"
					onClick={showNextPageHandler}>
				Показать еще
			</Button>
		</div>
	)
})
