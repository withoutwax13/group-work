import React from 'react'
import { Link } from 'react-router-dom'

// Primitives
import { Element } from '../Element'

// Atoms
import Menu from '../Menu'
import Heading from '../Heading'


// Style(default)
const defaultStyle = `
	display: grid;
	grid-template-columns: 5% 20% 70% 5%;
	grid-template-areas: ". logo menu .";
	height: 30px;
	width: 100%;
	background-color: black;
`

const Header = ({...props}) => {
	return (
		<Element
			css={defaultStyle}
			paddingtop='10px'
			paddingbottom='10px'
			{...props}>
				<Element
					css='grid-area: logo; display: flex; flex-direction: row; justify-content: flex-start;'>
					<Heading 
						semantic={Link}
						to='/' 
						customStyle='padding: 0; margin: 0; font-weight: bold; cursor: pointer; font-size: 1.5em;'>
							g/w
					</Heading>
				</Element>
				<Element
					css='grid-area: menu; display: flex; flex-direction: row; justify-content: flex-end;'>
					<Menu/>
				</Element>
		</Element>
	)
}

export default Header