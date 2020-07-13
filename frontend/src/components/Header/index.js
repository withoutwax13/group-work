import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// Primitives
import { Element } from '../Element'

// Atoms
import Menu from '../Menu'
import Heading from '../Heading'


// Style(default)
const defaultStyle = `
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 30px;
	background-color: #b4c0c5;
`

const Header = ({...props}) => {
	return (
		<Element
			css={defaultStyle}
			paddingLeft='5%'
			paddingRight='5%'
			paddingTop='10px'
			paddingBottom='10px'
			{...props}>
				<Heading 
					semantic={Link}
					to='/' 
					customStyle='padding: 0; margin: 0; font-weight: bold; cursor: pointer; font-size: 1.5em;'>
						g/w
				</Heading>
				<Menu/>
		</Element>
	)
}

export default Header