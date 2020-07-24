import React from 'react'

import { Element } from '../../Element'
import Heading from '../../Heading'
import Burger from '../Burger'
import Tab from '../../../pages/Home/MobileAndTablet/Tab'

const defaultStyle = () => `
    width: 100%;
    height: 40px;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const RoomDetail = ({...props}) => {
    const { customStyle, toggleMenu, toggleTab, ...rest } = props
    return (
        <Element
            css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
            {...rest}>
                <Tab customStyle='margin-left: 20px; margin-right: auto;'/>
                <Heading 
                    customStyle='margin: auto; padding: auto; font-family: Helvetica;'>
                        Active Group Name Here
                </Heading>
                <Burger customStyle='margin-left: auto; margin-right: 20px;' toggleMenu={toggleMenu}/>
        </Element>
    )
}

export default RoomDetail