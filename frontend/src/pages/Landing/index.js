import React from 'react'

import Background from '../../assets/images/landing-bg.jpg'

import { Element } from '../../components/Element'
import Button from '../../components/Button'

const defaultStyle = ``

// Task: Improve after other tasks

const Landing = ({...props}) => {
	return (
		<Element
			{...props}>
				<Element
					as='img'
					src={Background}
					css='width: 100%; height: calc(100vh - 30px);'
					{...props}/>
		</Element>
	)
}

export default Landing