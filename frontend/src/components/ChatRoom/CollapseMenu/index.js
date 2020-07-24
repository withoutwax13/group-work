import React from 'react'

import { Element } from '../../Element'
import Heading from '../../Heading'

const defaultStyle = () => `
    position: absolute;
    z-index: 999;
    text-align: center;
    width: 50%;
    height: 50%;
    background-color: black;
    margin: 0 0 auto auto;
`

const CollapseMenu = () => {
    return (
        <Element
            css={defaultStyle()}>
                <Heading semantic='h6'>Menu 1</Heading>
                <Heading semantic='h6'>Menu 2</Heading>
                <Heading semantic='h6'>Menu 3</Heading>
                <Heading semantic='h6'>Menu 4</Heading>
        </Element>
    )
}

export default CollapseMenu