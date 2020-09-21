import React from "react"
import {Typography} from "@material-ui/core"

export const Main = React.memo(() => {
	return (
		<div>
			<Typography variant="h4"
						color={"primary"}
						style={{marginTop: "30%"}}>
				Здесь что-то на Главной странице
			</Typography>
		</div>
	)
})