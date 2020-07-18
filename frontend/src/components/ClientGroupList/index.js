import React from 'react'

import { Element } from '../Element'
import Heading from '../Heading'

const defaultStyle = () => {
    return `
        background-color: #e8e4c9;
        border: 1px solid silver;
        border-radius: 10px;
        height: 100%;
        width: 100%;
    `
}

const labelStyle = () => `
    width: 100%;
    height: 40px;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`

const ClientGroupList = ({...props}) => {
    const { customStyle, ...rest } = props
    return (
        <Element
            css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
            {...rest}>
                <Element
                    css={labelStyle()}>
                        <Heading customStyle='margin: auto; font-family: Helvetica;'>
                            Your Groups
                        </Heading>
                </Element>
        </Element>
    )
}

export default ClientGroupList