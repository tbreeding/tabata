import React from 'react'
import Meta from '../components/meta'

const Default = ({ children, meta }) => (
	<div>
		<Meta props={meta} />
		{children}
	</div>
)

export default Default
