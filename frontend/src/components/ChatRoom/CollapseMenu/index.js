import React from 'react'

import { Element } from '../../Element'
import Heading from '../../Heading'

// UI NEEDS HEAVY IMPROVEMENT

const defaultStyle = () => `
    position: absolute;
    left: calc(100% - 215px);
    height: 200px;
    width: 200px;
    text-align: center;
    background-color: white;
    border-bottom-left-radius: 10px;
    border: 1px solid black;
    padding: 0 5px;
`
const menuChoiceStyle = () => `
    color: black; font-size: 1.0rem;
    &:hover{
        cursor: pointer;
        color: red;
    }
`

const CollapseMenu = () => {
    return (
        <Element
            css={defaultStyle()}>
                <Heading semantic='h6' customStyle={menuChoiceStyle()}>view group details</Heading>
                <Heading semantic='h6' customStyle={menuChoiceStyle()}>view group members</Heading>
                <Heading semantic='h6' customStyle={menuChoiceStyle()}>leave group</Heading>
        </Element>
    )
}

export default CollapseMenu