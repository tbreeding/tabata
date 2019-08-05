import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
	return {
		container: {
			display: 'flex',
			justifyContent: 'center',
			padding: '8px',
			flexDirection: 'column',
			alignItems: 'center',
			[theme.breakpoints.up('sm')]: {
				flexDirection: 'row',
				padding: '16px',
				alignItems: 'flex-start',
			},
		},
		buttonContainer: {
			display: 'flex',
			justifyContent: 'center',
			[theme.breakpoints.up('xs')]: {
				margin: '4px',
			},
		},
	}
}

const PrimaryButtons = props => {
	const { startTimer, stopTimer, reset, classes } = props
	return (
		<Grid item xs={12}>
			<Grid container spacing={16} className={classes.container}>
				<Grid item xs={6} sm={2} className={classes.buttonContainer}>
					<Button onClick={startTimer} variant="contained" color="primary" size="large">
						Start
					</Button>
				</Grid>
				<Grid item xs={6} sm={2} className={classes.buttonContainer}>
					<Button onClick={stopTimer} variant="contained" color="primary" size="large">
						Pause
					</Button>
				</Grid>
				<Grid item xs={6} sm={2} className={classes.buttonContainer}>
					<Button onClick={reset} variant="contained" color="secondary" size="large">
						Reset
					</Button>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default withStyles(styles)(PrimaryButtons)
