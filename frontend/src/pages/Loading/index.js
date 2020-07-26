import React from 'react'

import { Element } from '../../components/Element'
import Heading from '../../components/Heading'
import Spinner from '../../components/Loading/Spinner'

const defaultStyle = () => `
	height: calc(100vh - 100px);
`

const contentStyle = () => `
	position: absolute;
	top: calc(50% - 30px);
	left: calc(50% - 30px);
`

const LoadingPage = (props) => {
    return (
        <Element
            css={defaultStyle()}>
                <Element
                	css={contentStyle()}>
                		<Spinner/>
		                <Heading semantic='h5' customStyle='color: black; font-family: Helvetica;'>Wait a moment</Heading>
                </Element>
        </Element>
    )
}

export default LoadingPage