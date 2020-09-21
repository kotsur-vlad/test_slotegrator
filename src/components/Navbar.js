import React from "react"
import {NavLink} from "react-router-dom"
import {makeStyles} from "@material-ui/core/styles"
import {Toolbar, Typography, AppBar, Button, Box} from "@material-ui/core"
import {Home, AccountBox, FormatListBulleted} from "@material-ui/icons"

const useStyles = makeStyles({
	root: {},
	toolbar: {
		justifyContent: "space-between",
		height: "8vh",
		width: "100%",
	},
	buttons: {
		marginRight: "3%",
	},
	navLink: {
		color: "white",
		textDecoration: "none",
	},
	icon: {
		color: "white",
	},
})

export const Navbar = React.memo(() => {
	const classes = useStyles()

	return (
		<div>
			<AppBar>
				<Toolbar className={classes.toolbar}>
					<Typography variant="h5">
						Hello Users
					</Typography>
					<Box className={classes.buttons}>
						<Button startIcon={<Home className={classes.icon}/>}>
							<NavLink to="/"
									 className={classes.navLink}>
								На главную
							</NavLink>
						</Button>
						<Button startIcon={<AccountBox className={classes.icon}/>}>
							<NavLink to="/profile"
									 className={classes.navLink}>
								Профиль
							</NavLink>
						</Button>
						<Button startIcon={<FormatListBulleted className={classes.icon}/>}>
							<NavLink to="/users"
									 className={classes.navLink}>
								Пользователи
							</NavLink>
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</div>
	)
})