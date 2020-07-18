import React from 'react'

import { Element } from '../../Element'
import Heading from '../../Heading'

const defaultStyle = () => `
    width: 100px;
    height: 400px;
    border: 1px solid black;
    background-color: black;
    margin: 0 0 auto auto;
    text-align: center;
`

const CollapseMenu = ({...props}) => {
    return (
        <Element
            css={defaultStyle()}>
                <Heading semantic='h6'>Menu 1</Heading>
                <Heading semantic='h6'>Menu 2</Heading>
                <Heading semantic='h6'>Menu 3</Heading>
        </Element>
    )
}

export default CollapseMenu