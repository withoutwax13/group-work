import React from 'react'

import { Element } from '../../Element'
import Heading from '../../Heading'

const defaultStyle = () => `
    overflow-y: auto;
    width: 200px;
    max-height: 200px;
    border: 1px solid black;
    background-color: black;
    border-left: 1px solid white;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
    margin-top: 0;
    margin-right: 0;
    text-align: center;
`

const CollapseMenu = ({...props}) => {
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