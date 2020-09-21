import React, {useCallback} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Button, Card, CardContent, Typography} from "@material-ui/core"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		maxWidth: "70%",
	},
	card: {
		width: 500,
		marginBottom: "20px",
	},
	media: {
		height: 200,
		width: 200,
	},
})

export const Profile = React.memo((props) => {
	const classes = useStyles()

	//Handler for logout button
	const logoutButtonHandler = useCallback(() => {
		props.logout()
	}, [props.logout])

	return (
		<div className={classes.root}>
			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={props.profile.picture.medium}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{`${props.profile.name.first} ${props.profile.name.last}`}
							<Typography gutterBottom variant="body2" component="h6">
								- уже как {`${props.profile.registered.age}`} лет на нашем сервисе!
							</Typography>
						</Typography>
						<Typography variant="body2" color="textPrimary" component="p">
							Привет, это твой личный профиль. Здесь ты можешь узнать всю информацию о себе.
							Например, тебе сейчас {`${props.profile.dob.age}`} лет, а может быть
							и {`${props.profile.dob.age}`} года.
							Ты живёшь в городе {`${props.profile.location.city}`}, а твоя страна -
							это {`${props.profile.location.country}`}.
							Кстати, я звонил тебе по этому номеру: {`${props.profile.phone}`}, но ты почему-то не снял
							трубку.
							Поэтому я отправил тебе письмо на почту {`"${props.profile.email}"`} о том, что иногда в
							ответе от сервера приходит статус 503.
							И из-за этого информация может не отобразиться :(
							Ах да, ты пользуешься этим сервисом . Это рекорд!
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
			<Button variant="contained"
					color="primary"
					endIcon={<ExitToAppIcon/>}
					onClick={logoutButtonHandler}>
				Выйти
			</Button>
		</div>
	)
})

