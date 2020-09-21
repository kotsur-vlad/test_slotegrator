import React from "react"

export const User = React.memo((props) => {
		return (
			<div>
				<img src={props.picture}
					 alt="User"/>
				<div>
					<span>{props.nameFirst}</span>
					<span>{props.nameLast}</span>
					<span>{props.age}</span>
					<span>{props.city}</span>
					<span>{props.country}</span>
				</div>
			</div>
		)
	},
)