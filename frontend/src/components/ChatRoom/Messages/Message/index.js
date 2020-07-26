import React from 'react'

import { Element } from '../../../Element'

// Basic Message Component, will be improved after rest APIS are ready

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
	font-family: Calibri;
`
const messageBoxOthersStyle = () => `
	overflow-wrap: break-word;
	background-color: pink;
	width: 300px;
	padding: 5px;
	border: 1px solid gray;
	border-radius: 10px;
	margin: 5px auto 5px 5px;
	font-family: Calibri;
`
const senderProfilePhotoStyle = () => `
	background-color: silver;
	height: 50px;
	width: 50px;
	border: 1px solid black;
	border-radius: 100px;
	margin: 5px;
`
const Message = ({...props}) => {
	const { data, customStyle, isClient, ...rest } = props
	const renderMessageBox = () => {
		if(isClient){
			return <Element
						css={messageBoxClientStyle()}>
							<p>{data.message}</p>
					</Element>
		}
		return (
			<Element
				css='display: flex; flex-direction: row;'>
					<Element
						css={senderProfilePhotoStyle()}/>
					<Element
						css={messageBoxOthersStyle()}>
							<p>{data.message}</p>
					</Element>
			</Element>
		)
	}
	return (
		<Element
			css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
			{...rest}>
			{renderMessageBox()}
		</Element>
	)
}

export default Message