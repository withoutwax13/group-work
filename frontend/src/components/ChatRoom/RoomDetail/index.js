import React from 'react'

import { Element } from '../../Element'
import Heading from '../../Heading'
import Burger from '../Burger'

const defaultStyle = () => `
    width: 100%;
    height: 40px;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`

const RoomDetail = ({...props}) => {
    const { customStyle, ...rest } = props
    return (
        <Element
            css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
            {...rest}>
                <Heading 
                    customStyle='margin: auto auto auto 20px; font-family: Helvetica;'>
                        Active Group Name Here
                </Heading>
                <Burger/>
        </Element>
    )
}

export default RoomDetail