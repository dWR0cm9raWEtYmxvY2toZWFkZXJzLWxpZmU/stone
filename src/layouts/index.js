import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'

import './index.css'

const TemplateWrapper = ({ children }) => (
	<div>
		<Helmet
		title="Graphene DEVCON"
		meta={[
			{ name: 'pragma', content: 'no-cache' },
			{ name: 'Cache-Control', content: 'no-cache, must-revalidate' },
			{ name: 'expires', content: '0' },				
		]}/> <div style={{ margin: '0 auto', paddingTop: 0 }}>{children()}
		</div>
	</div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
