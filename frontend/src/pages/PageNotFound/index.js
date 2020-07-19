import React from 'react'

import { device } from '../../utils/responsiveBreakpoints'

import { Element } from '../../components/Element'
import Heading from '../../components/Heading'
import Button from '../../components/Button'

const PageNotFound = (props) => {
    return (
        <Element
            css='height: calc(100vh - 100px); text-align: center;'>
                <Heading customStyle={`${device.MobilePortrait}{font-size: 1.5rem;}${device.MobileLandscape}{font-size: 1.5rem;}color: black; font-size: 2.0rem;`}>OOPS! THIS URL IS NOT PART OF GROUP-WORK!</Heading>
                <Button to='/'>Go to Home</Button>
        </Element>
    )
}

export default PageNotFound