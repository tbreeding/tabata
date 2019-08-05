import React from 'react'
import {
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails,
	Grid,
	Typography,
	TextField,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
	return {
		controlsContainer: {
			padding: '16px',
		},
		root: {
			width: '100%',
		},
		heading: {
			fontSize: theme.typography.pxToRem(30),
			fontWeight: theme.typography.fontWeightRegular,
		},
		summary: {
			display: 'flex',
			justifyContent: 'center',
			textAlign: 'center',
		},
		textField: {
			maxWidth: '3rem',
			fontFamily: theme.typography.fontFamily,
			padding: '2px',
			borderRadius: theme.shape.borderRadius,
			[theme.breakpoints.up('sm')]: {
				marginLeft: '2px',
				marginRight: '2px',
			},
		},
		controlRow: {
			display: 'flex',
			justifyContent: 'space-between',
			flexDirection: 'column',
			alignItems: 'center',
			[theme.breakpoints.up('sm')]: {
				marginLeft: '2px',
				marginRight: '2px',
				flexDirection: 'row',
			},
		},
		colon: {
			margin: '0 2px',
		},
	}
}

const Controls = props => {
	const {
		classes,
		initialTimerMinutes,
		initialTimerSeconds,
		initialRestMinutes,
		initialRestSeconds,
		initialPrepMinutes,
		initialPrepSeconds,
		initialCycles,
		initialTabatas,
		handleValueChange,
	} = props
	return (
		<Grid item xs={12} className={classes.controlsContainer}>
			<ExpansionPanel>
				<ExpansionPanelSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Grid className={classes.summary}>
						<Typography className={classes.heading}>Controls</Typography>
					</Grid>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Grid container spacing={16}>
						<Grid item xs={12} s={6} className={classes.controlRow}>
							<Typography variant="subtitle1">Session Length</Typography>
							<Grid item>
								<Grid container>
									<input
										name="timerMinutes"
										label="Minutes"
										className={classes.textField}
										value={`${initialTimerMinutes}`.padStart(2, 0)}
										onChange={handleValueChange('timerMinutes')}
										type="number"
									/>
									<Typography variant="subtitle1" className={classes.colon}>
										:
									</Typography>
									<input
										name="timerSeconds"
										label="Seconds"
										className={classes.textField}
										value={`${initialTimerSeconds}`.padStart(2, 0)}
										onChange={handleValueChange('timerSeconds')}
										type="number"
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} s={6} className={classes.controlRow}>
							<Typography variant="subtitle1">Rest Length</Typography>
							<Grid item>
								<Grid container>
									<input
										name="restMinutes"
										label="Minutes"
										className={classes.textField}
										value={`${initialRestMinutes}`.padStart(2, 0)}
										onChange={handleValueChange('restMinutes')}
										type="number"
									/>
									<Typography variant="subtitle1" className={classes.colon}>
										:
									</Typography>
									<input
										name="restSeconds"
										label="Seconds"
										className={classes.textField}
										value={`${initialRestSeconds}`.padStart(2, 0)}
										onChange={handleValueChange('restSeconds')}
										type="number"
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} s={6} className={classes.controlRow}>
							<Typography variant="subtitle1">Prep Time</Typography>
							<Grid item>
								<Grid container>
									<input
										name="prepMinutes"
										label="Minutes"
										className={classes.textField}
										value={`${initialPrepMinutes}`.padStart(2, 0)}
										onChange={handleValueChange('prepMinutes')}
										type="number"
									/>
									<Typography variant="subtitle1" className={classes.colon}>
										:
									</Typography>
									<input
										name="prepSeconds"
										label="Seconds"
										className={classes.textField}
										value={`${initialPrepSeconds}`.padStart(2, 0)}
										onChange={handleValueChange('prepSeconds')}
										type="number"
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} s={6} className={classes.controlRow}>
							<Typography variant="subtitle1">Cycles</Typography>
							<Grid item>
								<Grid container>
									<input
										name="cycles"
										label="initialCycles"
										className={classes.textField}
										value={initialCycles}
										onChange={handleValueChange('cycles')}
										type="number"
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} s={6} className={classes.controlRow}>
							<Typography variant="subtitle1">Tabatas</Typography>
							<Grid item>
								<Grid container>
									<input
										name="tabatas"
										label="initialTabatas"
										className={classes.textField}
										value={initialTabatas}
										onChange={handleValueChange('tabatas')}
										type="number"
									/>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</Grid>
	)
}

export default withStyles(styles)(Controls)
