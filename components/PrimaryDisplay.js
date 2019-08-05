import React from 'react'
import { Grid, Typography, Card, CardContent } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { toHHMMSS } from '../utils/time'

const messageMap = {
	start: "It's Tabata Time!",
	work: 'Go Go Go!',
	prep: 'Get Ready!',
	rest: 'Cool down!',
	done: 'All done, great job!',
}

const styles = theme => {
	console.log('theme', theme)
	return {
		primaryContainer: {
			padding: '16px',
		},
		mainClock: {
			fontSize: '5rem',
			[theme.breakpoints.up('sm')]: {
				fontSize: '10rem',
			},
			[theme.breakpoints.up('md')]: {
				fontSize: '15rem',
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: '20rem',
			},
			borderRadius: theme.borderRadius,
			backgroundColor: props => {
				switch (props.currentStep) {
					case 'work':
						return 'green'
					case 'rest':
						return 'yellow'
					case 'prep':
						return 'blue'
					case 'done':
					default:
						return theme.palette.background.default
				}
			},
		},
		subValue: {
			fontSize: '2rem',
			[theme.breakpoints.up('sm')]: {
				fontSize: '4rem',
			},
			[theme.breakpoints.up('md')]: {
				fontSize: '6rem',
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: '8rem',
			},
		},
		subTitle: {
			fontSize: '1rem',
			[theme.breakpoints.up('sm')]: {
				fontSize: '2rem',
			},
			[theme.breakpoints.up('md')]: {
				fontSize: '3rem',
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: '4rem',
			},
		},
		content: {
			display: 'flex',
			justifyContent: 'center',
			textAlign: 'center',
		},
	}
}

const PrimaryDisplay = props => {
	const { classes, timerValue, restValue, resting, cycles, tabatas, currentStep } = props
	const dur = toHHMMSS(resting ? restValue : timerValue)
	return (
		<Grid item xs={12} className={classes.primaryContainer}>
			<Card>
				<CardContent className={classes.content}>
					<Grid container spacing={16}>
						<Grid item xs={12}>
							<Typography variant="h6">
								{currentStep ? messageMap[currentStep] : messageMap.start}
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.mainClock}>{dur}</Typography>
						</Grid>
						<Grid item xs={6}>
							<Typography className={classes.subValue}>{cycles}</Typography>
							<Typography className={classes.subTitle}>Cycles</Typography>
						</Grid>
						<Grid item xs={6}>
							<Typography className={classes.subValue}>{tabatas}</Typography>
							<Typography className={classes.subTitle}>Tabatas</Typography>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Grid>
	)
}

export default withStyles(styles)(PrimaryDisplay)
