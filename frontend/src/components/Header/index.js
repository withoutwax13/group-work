import React from 'react'
import PropTypes from 'prop-types'

// Primitives
import { Element } from '../Element'

// Atoms
import Menu from '../Menu'
import Logo from '../Logo'


// Style(default)
const defaultStyle = `
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 35px;
	background-color: #b4c0c5;
`

const Header = ({...props}) => {
	return (
		<Element
			css={defaultStyle}
			paddingLeft='3%'
			paddingRight='3%'
			paddingTop='5px'
			paddingBottom='5px'
			{...props}>
				<Logo/>
				<Menu/>
		</Element>
	)
}

export default Header