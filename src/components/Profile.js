import React from "react"

export const Profile = React.memo((props) => {
	return (
		<div>
			<img src={props.profile.picture.medium}
				 alt="Profile"/>
			<span>{props.profile.name.first}</span>
			<span>{props.profile.name.last}</span>
			<span>{props.profile.dob.age}</span>
			<span>{props.profile.location.city}</span>
			<span>{props.profile.location.country}</span>
			<span>{props.profile.email}</span>
			<span>{props.profile.phone}</span>
			<span>{props.profile.registered.age}</span>
		</div>
	)
})

