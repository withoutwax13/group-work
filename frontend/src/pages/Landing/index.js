import React, { useRef } from 'react'

import { device } from '../../utils/responsiveBreakpoints'
import { Element } from '../../components/Element'
import Heading from '../../components/Heading'
import Button from '../../components/Button'
import GoogleAuth from '../../components/GoogleAuth'

const defaultStyle = () => `
	width: 100%; 
	height: 100%;
	text-align: center;
`

const heroSectionStyle = () => `
	margin-top: 10%;
	margin-bottom: 10%;
	display: flex; flex-direction: column; align-items: space-between;
`
const mainHeadingStyle = () => `
	${device.MobilePortrait}{
		color: black; font-family: Helvetica; font-size: 4.0rem;
	}
	${device.MobileLandscape}{
		color: black; font-family: Helvetica; font-size: 4.0rem;
	}
	color: black; font-family: Helvetica; font-size: 5.0rem;
`

const subHeadingStyle = () => `
	${device.MobilePortrait}{
		color: gray; font-damily: Courier New; font-size: 1.3rem;
		margin: auto 5% 3% 5%;
	}
	${device.MobileLandscape}{
		color: gray; font-damily: Courier New; font-size: 1.3rem;
		margin: auto 5% 3% 5%;
	}
	color: gray; font-damily: Courier New; font-size: 1.3rem;
`

const Landing = ({...props}) => {
	const onJoinClick = useRef()
	return (
		<Element
			css={defaultStyle()}
			{...props}>
				<Element
					css={heroSectionStyle()}>
					<Heading 
						semantic='h1' 
						customStyle={mainHeadingStyle()}>
							work with groups
					</Heading>
					<Heading 
						semantic='h3' 
						customStyle={subHeadingStyle()}>
							Connect to people with same interests, goals and motivation.	
					</Heading>
					<GoogleAuth 
						WrappedComponent={()=>
											<Button 
												type='auth'
												onClick={onJoinClick.current} 
												customStyle='font-size: 1.2rem; font-family: MS Sans Serif; margin: 10px auto 10px auto; height: 40px;'>
													JOIN GROUP-WORK TODAY!
											</Button>}
						eventHandler={onJoinClick}/>
				</Element>
		</Element>
	)
}

export default Landing