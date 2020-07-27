import React from 'react'
import { connect } from 'react-redux'

import { selectGroup } from '../../../modules/actions'

import { Element } from '../../Element'

// Needs heavy improvement

const defaultStyle = () => `
	background-color: white;
	width: 100%;
	height: 70px;
	display: flex;
	flex-direction: row;
	margin: 5px auto;
	cursor: pointer;
`

// This is only a mock UI since the backend dev is not ready yet
const groupPhotoStyle = () => `
	height: 50px;
	width: 50px;
	border-radius: 100px;
	background-color: silver;
	border: 1px solid black;
	margin: auto 10px;
`

const groupNameCardStyle = () => `
	height: 100%;
	width: 100%;
	color: black;
	font-weight: bold;
	letter-spacing: 3px;
`

const groupLatesChatGlimpseStyle = () => `
	height: 100%;
	width: 100%;
	color: gray;
`

const GroupCard = (props) => {

	// mockups first

	const { data, selectGroup } = props

	const limitCharCount = (label) => {
		const charLimit = 40
		return label.length > charLimit ? label.split('').filter((ch, i)=>i<charLimit).concat(['...']).join('') : label
	}

	return (
		<Element
			css={defaultStyle()}
			onClick={()=>selectGroup({groupName: data.groupName})}>
				<Element
					css={groupPhotoStyle()}/>
				<Element
					css='display: flex; flex-direction: column; margin: 0 10px;'>
						<Element
							css={groupNameCardStyle()}>
								{limitCharCount(data.groupName)}
						</Element>
						<Element
							css={groupLatesChatGlimpseStyle()}>
								{limitCharCount(data.latestChat)}
						</Element>
				</Element>
		</Element>
	)
}

export default connect(null, { selectGroup })(GroupCard)