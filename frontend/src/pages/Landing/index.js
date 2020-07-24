import React, { useRef } from 'react'

// Temporary feature logos
import friendsLogo from '../../assets/images/friends.png'
import groupLogo from '../../assets/images/group.jpg'
import chatLogo from '../../assets/images/chat.jpg'

import { Element } from '../../components/Element'
import Heading from '../../components/Heading'
import Button from '../../components/Button'
import GoogleAuth from '../../components/GoogleAuth'
import Logo from '../../components/Logo'

import { 
			defaultStyle, 
			heroSectionStyle, 
			mainHeadingStyle, 
			subHeadingStyle, 
			featureSectionStyle, 
			featureContainerStyle, 
			featureLogoStyle 
		} 
			from './style'

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
				<Element
					css={featureSectionStyle()}>
						<Element 
							css={featureContainerStyle()}>
								<Logo src={friendsLogo} customStyle={featureLogoStyle()}/>
								<Heading customStyle='color: black;'>meet people with same interests and goals</Heading>
						</Element>
						<Element 
							css={featureContainerStyle()}>
								<Logo src={groupLogo} customStyle={featureLogoStyle()}/>
								<Heading customStyle='color: black;'>create or join groups of your interests</Heading>
						</Element>
						<Element 
							css={featureContainerStyle()}>
								<Logo src={chatLogo} customStyle={featureLogoStyle()}/>
								<Heading customStyle='color: black;'>communicate and achieve results</Heading>
						</Element>
				</Element>
		</Element>
	)
}

export default Landing