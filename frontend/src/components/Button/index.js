import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Element } from '../Element'

const styleVariants = {
	primary: `
		background-color: #aec6cf;
	`,
	secondary: `
		background-color: #dedad7;
	`,
	danger: `
		background-color:  #ff6961;
	`,
	link: `
		background-color:  #77dd77;
	`,
	auth: `
		background-color: #ec008c;
	`
}

const commonStyles = `
	cursor: pointer;
	border-radius: 6px;
	border: 1px solid silver;
	height: 30px;
	outline: none;
	&:active{
		transform: scale(1, 1.05);
	}
	font-family: 'MS Sans Serif';
	font-weight: bold;
`

const Button = ({...props})=>{
	return (
		<Element 
			as={props.to || props.href ? Link : 'button'}
			css={styleVariants[props.type] + commonStyles}
			paddingLeft='10px'
			paddingRight='10px'
			{...props}>
					{props.children}
		</Element>
	)
}

Button.propTypes = {
	to: PropTypes.string,
	href: PropTypes.string,
	type: PropTypes.string.isRequired,
	children: PropTypes.node
}

export default Button