import React from 'react'

import { Element } from '../../Element'

const defaultStyle = () => `
        margin: 5px auto;
        cursor: pointer;
        font-weight: bold; 
        background: transparent;
        color: white; 
        &:hover{ color: gray; }
        user-select: none;
    `

const Burger = ({...props}) => {
    const { customStyle, toggleMenu } = props
    return (
        <Element 
            css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
            onClick={toggleMenu}>
                ...
        </Element>
    )
}

export default Burger