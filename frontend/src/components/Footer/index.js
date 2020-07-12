import React from 'react'
import { Element } from '../Element'

const defaultStyle = `
	display: flex;
	flex-direction: row;
	justify-content: space-around;

	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
`

export default ({...props})=>{
	return (
		<Element
			css={props.style ? props.style : defaultStyle}
			{...props}>
				Footer
		</Element>
	)
}