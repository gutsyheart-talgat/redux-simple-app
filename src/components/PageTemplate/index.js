import React from 'react'
import { node } from 'prop-types'
import Nav from '../Nav'
import Info from '../Info'

function PageTemplate({ children }) {
  return (
    <div>
      <Nav />
      <Info />
      {children}
    </div>
  )
}

PageTemplate.propTypes = {
  children: node.isRequired,
}

export default PageTemplate
