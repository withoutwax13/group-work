import React from 'react'
import { Element } from '../Element'

const defaultStyle = () => {
    return `
        border: 1px solid gray;
        border-radius: 10px;
        box-shadow: 2px 2px 2px gray;
    `
}

const ClientGroupList = ({...props}) => {
    const { customStyle, ...rest } = props
    return (
        <Element
            css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
            {...rest}>
                ClientGroupList
        </Element>
    )
}

export default ClientGroupList