import React from 'react'

import { Element } from '../../../Element'

const defaultStyle = () => `

`

const messageBoxClientStyle = () => `
	overflow-wrap: break-word;
	background-color: lightblue;
	width: 300px;
	padding: 5px;
	border: 1px solid gray;
	border-radius: 10px;
	margin: 5px 5px 5px auto;
`
const messageBoxOthersStyle = () => `
	overflow-wrap: break-word;
	background-color: white;
	width: 300px;
	padding: 5px;
	border: 1px solid gray;
	border-radius: 10px;
	margin: 5px auto 5px 5px;
`

// Basic Message Component, will be improved after rest APIS are ready

const Message = ({...props}) => {
	const { data, customStyle, isClient, ...rest } = props
	return (
		<Element
			css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
			{...rest}>
			<Element
				css={isClient ? messageBoxClientStyle() : messageBoxOthersStyle()}>
					<p>{data.message}</p>
			</Element>
		</Element>
	)
}

export default Message