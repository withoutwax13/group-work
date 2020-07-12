import React from 'react'

import SearchIcon from '../../../assets/images/search-icon.png'
import CloseIcon from '../../../assets/images/x-icon.jpg'

import { Element } from '../../Element'
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
		e.preventDefault()
		setInput(e.target.value)
		setInput('')
	}

	const renderSearchInputUI = () => {
		if (inputUICollapse){
			return <Input 
						value={input} 
						placeholder='Search group-work' 
						onChange={onInputChange}/>
		}
	}

	return (
		<Element
			css={defaultStyle}
			{...props}>
				{renderSearchInputUI()}
				<Element
					marginRight='10px'
					padding='5px'
					css='mix-blend-mode: multiply;'>
						<Logo 
							src={inputUICollapse ? CloseIcon : SearchIcon} 
							width='20px' 
							height='20px' 
							onClick={()=>shouldInputUICollapse(!inputUICollapse)}/>
				</Element>
		</Element>
	)
}

export default Search