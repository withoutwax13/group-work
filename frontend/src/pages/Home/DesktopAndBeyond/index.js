import React from 'react'

import { device } from '../../../utils/responsiveBreakpoints'
import { Element } from '../../../components/Element'

import ClientCard from '../../../components/ClientCard'

const defaultStyle = () => {
	return `
		
		margin: 3%;

		${device.MobilePortrait}{
			display: none;
		}
		${device.MobileLandscape}{
			display: none;
		}
		${device.Tablet}{
			display: none;
		}
		${device.TabletHD}{
			display: none;
		}
	`
}

const DesktopAndBeyond = ({...props}) => {
	return (
		<Element
			css={defaultStyle()}
			{...props}>
				<ClientCard/>
		</Element>
	)
}

export default DesktopAndBeyond