import React, { useState } from 'react'
import { Element } from '../Element'
import RoomDetail from './RoomDetail'
import Messages from './Messages'
import Tools from './Tools'

const defaultStyle = () => {
    return `
        background-color: white;
        border: 1px solid silver;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    `
}

const ChatRoom = ({...props}) => {
    const { customStyle, ...rest } = props
    const [ menuCollapse, setMenuCollapse ] = useState(false)

    // control function for collapsing menu toggle
    const toggleMenu = () => {
        setMenuCollapse(!menuCollapse)
    }
    return (
        <Element
            css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
            {...rest}>
                <RoomDetail toggleMenu={toggleMenu}/>
                <Messages menuCollapse={menuCollapse} toggleMenu={toggleMenu}/>
                <Tools/>
        </Element>
    )
}

export default ChatRoom