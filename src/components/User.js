import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Card, CardHeader, Avatar, Typography, CardContent} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: "20px",
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
}))

export const User = React.memo((props) => {
	const classes = useStyles()

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar src={props.picture}
							className={classes.large}>
					</Avatar>
				}
				title={`${props.nameFirst} ${props.nameLast}`}
				subheader={`${props.age} лет (года)`}
			/>
			<CardContent>
				<Typography variant="body1"
							color="textPrimary">
					Привет, красавчик (красавица), меня зовут {`${props.nameFirst} ${props.nameLast}`}.
					Мне {`${props.age} лет (года)`}.
					Я еще в самом расцвете сил. Люблю заниматься скалолазанием, и подводной фотографией.
					Я живу в {`${props.country}`}, а именно в городе {`${props.city}`}. Приезжай ко мне в гости!
					И я накормлю тебя супом. И покажу много красивых мест моей родины!
				</Typography>
			</CardContent>
		</Card>
	)
})