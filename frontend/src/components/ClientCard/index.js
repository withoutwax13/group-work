import React from 'react'
import { connect } from 'react-redux'

import { Element } from '../Element'
import { device } from '../../utils/responsiveBreakpoints'

import Avatar from '../Avatar'
import Heading from '../Heading'
import Button from '../Button'

const defaultStyle = () => {
	return `
		background-color: #dedad7;
		border: 1px solid silver;
		border-radius: 10px;
		box-shadow: 2px 2px 2px gray;
		height: 100%;
        width: 100%;
		display: flex;
		flex-direction: row;
		max-width: 320px;
	`
}

const ClientCard = ({...props}) => {

	const { customStyle, CLIENT, ...rest } = props
	const [ inputValue, setInputValue ] = React.useState('')
	const [ inputEditable, setInputEditable ] = React.useState(false)

	const nameCharLimit = 10

	const bioStyle = () => {
		return `
			padding: 5px;
			border-radius: 5px;
			${!inputEditable ? `pointer-events: none;` : ``}
			${device.Desktop}{
				width: 85%;
				height: 60%;
			}
			${device.DesktopHD}{
				width: 85%;
				height: 60%;
			}
			${device.TabletHD}{
				width: 80%;
				height: 40%;
			}
			${device.Tablet}{
				width: 80%;
				height: 40%;
			}
			${device.MobileLandscape}{
				width: 80%;
				height: 40%;
			}
			${device.MobilePortrait}{
				width: 80%;
				height: 40%;
			}
		`
	}

	const bioContainerStyle = () => {
		return `
			display: flex;
			flex-direction: row;
			height: 80%;
		`
	}

	const editButtonStyle = () => {
		return `
			margin: 0 3px auto 3px;
			width: 20%;
			height: 20%;
			font-size: 0.5em;

		`
	}

	if (CLIENT) {
		return (
			<Element
				css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
				{...rest}>
					<Avatar imageUrl={CLIENT.signedInImageUrl}/>
					<Element
						css='margin-left: 5px;'>
						<Heading 
							semantic='h5'>
								Name: {CLIENT.signedInName.length < nameCharLimit ? CLIENT.signedInName : CLIENT.signedInName.split('').filter((ch, i)=> i < nameCharLimit).concat(['...']).join('')}
						</Heading>
						<Element
							css={bioContainerStyle()}>
								<Element 
									as='textarea' 
									value={inputValue} 
									css={bioStyle()} 
									onChange={e=>setInputValue(e.target.value)}/>
								<Button 
									type='primary' 
									customStyle={editButtonStyle()} 
									onClick={()=>setInputEditable(!inputEditable)}>
										{inputEditable ? `Save` : `Edit`}
								</Button>
						</Element>
					</Element>
			</Element>
		)
	}
	else {
		return (
			<Element
				css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
				{...rest}>
					Loading...
			</Element>
		)
	}
}

const mapStateToProps = ({CLIENT_LOG_DATA}) => {
	return {
		CLIENT: CLIENT_LOG_DATA
	}
}

export default connect(mapStateToProps)(ClientCard)