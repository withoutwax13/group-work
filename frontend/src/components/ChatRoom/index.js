import React from 'react'
import { Element } from '../Element'
import RoomDetail from './RoomDetail'
import Messages from './Messages'
import Tools from './Tools'

const defaultStyle = () => {
    return `
        background-color: #e8e4c9;
        border: 1px solid silver;
        border-radius: 10px;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    `
}

const ChatRoom = ({...props}) => {
    const { customStyle, ...rest } = props
    return (
        <Element
            css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
            {...rest}>
                <RoomDetail/>
                <Messages/>
                <Tools/>
        </Element>
    )
}

export default ChatRoom