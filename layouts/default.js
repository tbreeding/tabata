import React from 'react'
import Meta from '../components/meta'
import withRoot from '../withRoot'

const Default = ({ children, meta }) => (
    <div>
      <Meta props={meta} />
      { children }
    </div>
)

export default withRoot(Default)