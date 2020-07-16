import React from 'react'

import SearchIcon from '../../../assets/images/search-icon.png'
import CloseIcon from '../../../assets/images/x-icon.jpg'

import { Element } from '../../Element'
import Form from '../../Form'
import Input from '../../Input'
import Logo from '../../Logo'

const defaultStyle = `
	display: flex;
	flex-direction: row;
`

const Search = ({...props}) => {

	const [ input, setInput ] = React.useState('')
	const [ inputUICollapse, shouldInputUICollapse ] = React.useState(false)

	const onInputChange = e => {
		setInput(e.target.value)
	}

	const onFormSubmit = e => {
		e.preventDefault()
		setInput('')
		// Search Submit Logic here
	}

	const onIconClick = () => {
		shouldInputUICollapse(!inputUICollapse)
		setInput('')
	}

	const renderSearchInputUI = () => {
		if (inputUICollapse){
			return (
				<Form
					onSubmit={onFormSubmit}>
						<Input 
							value={input} 
							placeholder='Search group-work' 
							onChange={onInputChange}/>
				</Form>
			)
		}
	}

	return (
		<Element
			css={defaultStyle}
			{...props}>
				{renderSearchInputUI()}
				<Element
					marginright='10px'
					marginleft='10px'
					padding='5px'
					css='mix-blend-mode: multiply;'>
						<Logo 
							src={inputUICollapse ? CloseIcon : SearchIcon} 
							width='20px' 
							height='20px' 
							onClick={onIconClick}/>
				</Element>
		</Element>
	)
}

export default Search