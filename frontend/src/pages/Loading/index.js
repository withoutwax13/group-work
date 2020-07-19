import React from 'react'

import { Element } from '../../components/Element'
import Heading from '../../components/Heading'

const LoadingPage = (props) => {
    return (
        <Element
            css='height: calc(100vh - 100px);'>
                <Heading customStyle='color: black; font-size: 3.0rem; font-family: Helvetica; position: absolute; top: 20%; left: 5%;'>Loading...</Heading>
        </Element>
    )
}

export default LoadingPage