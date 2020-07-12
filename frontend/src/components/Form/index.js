import React from 'react'
import { Element } from '../Element'

const defaultStyle = ``

export default ({..props})=>{
	return (
		<Element
			as='form'
			css={props.style ? props.style : defaultStyle}
			{...props}>
				{props.children}
		</Element>
	)
}