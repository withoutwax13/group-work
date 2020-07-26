import React from 'react'

import { Element } from '../Element'
import Heading from '../Heading'

const defaultStyle = `
	display: flex;
	flex-direction: row;
	justify-content: space-around;

	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	background-color: black;
`

const Footer = ({...props})=>{
	const { customStyle, IS_CLIENT_LOGGED, ...rest } = props 
	return (
		<Element
			css={customStyle ? defaultStyle + customStyle : defaultStyle}
			{...rest}>
				<Heading semantic='p'>(c)group-work. All rights reserved.</Heading>
		</Element>
	)
}

export default Footer