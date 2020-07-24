import React from 'react'

import { Element } from '../../../Element'

const defaultStyle = () => `

`

const messageBoxStyle = () => `
	background-color: lightblue;
	height: 50px; width: 400px;
	padding: 5px;
	border-radius: 20px;
	margin: 5px auto;
`

// Basic Message Component, will be improved after rest APIS are ready

const Message = ({...props}) => {
	const { message, customStyle, ...rest } = props
	return (
		<Element
			css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
			{...rest}>
			<Element
				css={messageBoxStyle()}>
					{message}
			</Element>
		</Element>
	)
}

export default Message