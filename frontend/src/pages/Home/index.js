import React from 'react'
import { Element } from '../../components/Element'

import MobileAndTablet from './MobileAndTablet'
import DesktopAndBeyond from './DesktopAndBeyond'

const defaultStyle = () => {
	return `
		background-color: white;
		height: calc(100vh - 100px);
		
	`
}

const Home = ({...props}) => {
	return (
		<Element
			css={defaultStyle}
			{...props}>
			<MobileAndTablet/>
			<DesktopAndBeyond/>
		</Element>
	)
}

export default Home