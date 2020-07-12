import React from 'react'

import { Element } from '../Element'
import Menu from '../Menu'
import Footer from './Footer'

const defaultStyle = `
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
`

const Integrated = ({...props}) => {
	return (
		<Element
			css={defaultStyle}>
				<Menu/>
					{props.children}
				<Footer/>
		</Element>
	)
}

export default Integrated