import React, { useRef } from 'react'

import { Element } from '../../components/Element'
import Heading from '../../components/Heading'
import Button from '../../components/Button'
import GoogleAuth from '../../components/GoogleAuth'

import { 
			defaultStyle,
			heroSectionContainerStyle,
			mainHeadingStyle,
			subHeadingStyle,
			authButtonStyle
		} 
			from './style'

const Landing = ({...props}) => {

	const authLoginRef = useRef()

	return (
		<Element
			css={defaultStyle()}>
			<Element
				css={heroSectionContainerStyle}>
					<Heading 
						as='h1'
						customStyle={mainHeadingStyle()}>
							<span 
								style={{color: 'red'}}>
									you
							</span>
							're not alone
					</Heading>
					<Element
						css='margin: 5% 0;'>
						<Heading
							as='h3'
							customStyle={subHeadingStyle()}>
								PEOPLE LIKE <span 
									style={{color: 'red'}}>
										YOU
								</span> ARE OUT THERE.
						</Heading>
						<Heading
							as='h3'
							customStyle={subHeadingStyle()}>
								WE'LL FIND THEM FOR <span 
									style={{color: 'red'}}>
										YOU
								</span>.
						</Heading>
					</Element>
					<GoogleAuth
						WrappedComponent={()=>
							<Button type='auth' customStyle={authButtonStyle()} onClick={authLoginRef.current}>JOIN GROUP-WORK</Button>
						}
						eventHandler={authLoginRef}/>
			</Element>
		</Element>
	)
}

export default Landing