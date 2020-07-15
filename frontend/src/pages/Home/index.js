import React from 'react'
import { Element } from '../../components/Element'

import MobileAndTablet from './MobileAndTablet'
import DesktopAndBeyond from './DesktopAndBeyond'

const defaultStyle = () => {
	return `
		background-color: #e9e5e3;
		height: calc(100vh - 30px);
		
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