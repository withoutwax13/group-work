import React from 'react'
import { Element } from '../Element'

const defaultStyle = `
	cursor: pointer;
`

const Logo = ({...props}) => {
	return (
		<Element
			as='img'
			css={props.customStyle ? props.customStyle + defaultStyle : defaultStyle}
			{...props}/>
	)
}

export default Logo