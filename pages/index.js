import React from 'react'
import Default from '../layouts/default'
import { Divider, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import PrimaryDisplay from '../components/PrimaryDisplay'
import PrimaryButtons from '../components/PrimaryButtons'
import Controls from '../components/Controls'

const meta = { title: 'Tabata Timer', description: 'Tabata Timer for Tabata Workouts' }

const styles = theme => {
	return {
		default: {
			backgroundColor: theme.palette.background.default,
			display: 'flex',
			flexDirection: 'column',
		},
	}
}
class IndexPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			timer: 0,
			cycles: 3,
			tabatas: 1,
			resting: false,
			complete: false,
			running: false,
			currentStep: null,
			initial: {
				cycles: 3,
				tabatas: 1,
				timerMinutes: 0,
				timerSeconds: 5,
				restMinutes: 0,
				restSeconds: 2,
				prepMinutes: 0,
				prepSeconds: 2,
			},
		}
		this.interval = null
	}

	getNextStep = () => {
		console.log('getNextStep', this.state.currentStep)
		switch (this.state.currentStep) {
			case 'prep':
				return 'work'
			case 'work':
				if (this.state.cycles - 1 > 0) {
					this.setState(prevState => {
						return {
							cycles: prevState.cycles - 1,
						}
					})
					return 'rest'
				} else {
					if (this.state.tabatas - 1 > 0) {
						this.setState(prevState => {
							return {
								tabatas: prevState.tabatas - 1,
								cycles: prevState.initial.cycles,
							}
						})
						return 'rest'
					} else {
						// you're done!
						this.stopTimer()
						this.setState({
							cycles: 0,
							tabatas: 0,
							timer: 0,
							currentStep: null,
						})
						return 'done'
					}
				}
			case 'rest':
				return 'work'
			default:
				return 'prep'
		}
	}

	getInitialTimerValue = step => {
		let minutes, seconds
		switch (step) {
			case 'prep':
				minutes = this.state.initial.prepMinutes
				seconds = this.state.initial.prepSeconds
				break
			case 'rest':
				minutes = this.state.initial.restMinutes
				seconds = this.state.initial.restSeconds
				break
			default:
				minutes = this.state.initial.timerMinutes
				seconds = this.state.initial.timerSeconds
		}
		return minutes * 60 + seconds
	}

	runTimer = () => {
		if (this.interval) clearInterval(this.interval)
		console.log('this.state.currentStep', this.state.currentStep)
		if (this.state.currentStep === 'done') {
			console.log('resetting!')
			this.reset()
		}
		this.setState(
			prevState => {
				const { running, timer } = prevState
				const currentStep = running ? prevState.currentStep : this.getNextStep()
				const newTimer = running ? timer : this.getInitialTimerValue(currentStep)

				return {
					currentStep,
					running: true,
					timer: newTimer,
				}
			},
			() => {
				this.interval = setInterval(() => {
					if (this.state.timer) {
						this.setState(prevState => {
							return {
								timer: prevState.timer - 1,
							}
						})
					} else {
						const step = this.getNextStep()
						this.setState(prevState => {
							return {
								currentStep: step,
								timer: this.getInitialTimerValue(step),
							}
						})
					}
				}, 1000)
			},
		)
	}

	stopTimer = () => {
		if (this.interval) {
			clearInterval(this.interval)
			this.interval = null
		}
	}

	reset = () => {
		if (this.interval) {
			clearInterval(this.interval)
			this.interval = null
		}
		this.setState(prevState => {
			const { timer, cycles, tabatas } = prevState.initial
			return { timer, cycles, tabatas, running: false, currentStep: null }
		})
	}

	handleValueChange = field => e => {
		const val = +e.target.value
		this.setState(prevState => {
			return {
				initial: {
					...prevState.initial,
					[field]: val,
				},
			}
		})
	}

	render() {
		const { running, initial, timer } = this.state
		const timerValue = running ? timer : this.getInitialTimerValue()
		return (
			<Default meta={meta}>
				<Grid container spacing={16} className={this.props.classes.default}>
					<PrimaryDisplay
						timerValue={timerValue}
						running={this.state.running}
						resting={this.state.resting}
						complete={this.state.complete}
						cycles={this.state.cycles}
						tabatas={this.state.tabatas}
						currentStep={this.state.currentStep}
					/>
					<Grid item>
						<Divider />
					</Grid>
					<PrimaryButtons
						startTimer={this.runTimer}
						stopTimer={this.stopTimer}
						reset={this.reset}
					/>
					<Controls
						initialTimerMinutes={this.state.initial.timerMinutes}
						initialTimerSeconds={this.state.initial.timerSeconds}
						initialRestMinutes={this.state.initial.restMinutes}
						initialRestSeconds={this.state.initial.restSeconds}
						initialPrepMinutes={this.state.initial.prepMinutes}
						initialPrepSeconds={this.state.initial.prepSeconds}
						initialCycles={this.state.initial.cycles}
						initialTabatas={this.state.initial.tabatas}
						handleValueChange={this.handleValueChange}
					/>
				</Grid>
			</Default>
		)
	}
}

export default withStyles(styles)(IndexPage)
