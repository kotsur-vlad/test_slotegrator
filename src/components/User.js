import React from "react"

export const User = React.memo((props) => {
		return (
			<div>
				<img src={props.picture} alt=""/>
				<div>
					<span>{props.name}</span>
					<span>{props.address}</span>
					<span>{props.email}</span>
					<span>{props.number}</span>
				</div>
			</div>
		)
	},
)