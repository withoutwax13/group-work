import React, { useState } from 'react'

import SearchIcon from '../../../assets/images/search-icon.png'
import CloseIcon from '../../../assets/images/x-icon.png'

import { Element } from '../../Element'
import Form from '../../Form'
import Input from '../../Input'
import Logo from '../../Logo'

const defaultStyle = `
	display: flex;
	flex-direction: row;
`

const Search = ({...props}) => {

	const [ input, setInput ] = useState('')
	const [ inputUICollapse, shouldInputUICollapse ] = useState(false)

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
							customStyle='height: 20px;'
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
					css=''>
						<Logo 
							src={inputUICollapse ? CloseIcon : SearchIcon} 
							width='20px' 
							height='20px'
							customStyle='' 
							onClick={onIconClick}/>
				</Element>
		</Element>
	)
}

export default Search