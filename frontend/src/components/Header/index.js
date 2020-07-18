import React from 'react'
import { Link } from 'react-router-dom'

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
	background-color: black;
`

const Header = ({...props}) => {
	return (
		<Element
			css={defaultStyle}
			paddingleft='5%'
			paddingright='5%'
			paddingtop='10px'
			paddingbottom='10px'
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