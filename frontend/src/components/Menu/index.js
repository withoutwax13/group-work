import React from 'react'
import { Element } from '../Element'
import Left from './Left'
import Right from './Right'

const defaultStyle = `
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

export default ({...props}) => {
	return (
		<Element
			css={props.style ? props.style : defaultStyle}
			{...props}>
				<Left/>
				<Right/>
		</Element>
	)
}