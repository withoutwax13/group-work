import React from 'react'
import { Element } from '../Element'

const defaultStyle = () => {
    return `
        background-color: #dedad7;
        border: 1px solid silver;
        border-radius: 10px;
        box-shadow: 2px 2px 2px gray;
        height: 100%;
        width: 100%;
    `
}

const ChatRoom = ({...props}) => {
    const { customStyle, ...rest } = props
    return (
        <Element
            css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
            {...rest}>
                ChatRoom
        </Element>
    )
}

export default ChatRoom