import React from 'react'
import PropTypes from 'prop-types'
import NoSSR from './NoSSR'

const supportsTouch = 'ontouchstart' in global

function Fragment(props) {
  return props.children
}

function SupportTouch(props) {
  const { children } = props

  return <Fragment>{children}</Fragment>
}

SupportTouch.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SupportTouch
