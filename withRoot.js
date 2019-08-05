import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import * as Colors from 'material-ui/styles/colors'

const getTheme = () => {
	const overwrites = {
		palette: {
			primary: {
				main: Colors.grey700,
			},
			accent1Color: Colors.orange900,
		},
		typography: {
			useNextVariants: true,
			fontFamily: '"Righteous", "Roboto", "Helvetica", "Arial", sans-serif',
		},
	}
	return getMuiTheme(baseTheme, overwrites)
}

const theme = createMuiTheme(getTheme())

const withRoot = Component => props => (
	<MuiThemeProvider theme={theme}>
		<CssBaseline />
		<Component {...props} />
	</MuiThemeProvider>
)

export default withRoot
