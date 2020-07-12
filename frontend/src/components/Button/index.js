import React from 'react'
import { Link } from 'react-router-dom'
import { Element } from '../Element'

const styleVariants = {
	primary: `
		background-color: #b4c0c5;
	`,
	secondary: `
		background-color: #dedad7;
	`,
	danger: `
		background-color: #ed1c24;
	`,
	link: `
		background-color: #e9e5e3;
	`,
	auth: `
		background-color: #ec008c;
	`
}

const commonStyles = `
	
`

export default ({...props})=>{
	return (
		<Element 
			as={props.to || props.href ? Link : 'button'}
			css={styleVariants[props.type] + commonStyles}
			{...props}>
					{props.children}
		</Element>
	)
}