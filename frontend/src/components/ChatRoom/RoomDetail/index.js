import React from 'react'

import { device } from '../../../utils/responsiveBreakpoints'

import { Element } from '../../Element'
import Heading from '../../Heading'
import Burger from '../Burger'
import Tab from '../../../pages/Home/MobileAndTablet/Tab'

const defaultStyle = () => `
    width: 100%;
    maximum-height: 40px;
    background-color: black;
    display: grid;
    ${device.Desktop}{
        grid-template-columns: 80% 20%;
        grid-template-areas: "roomName burger";
    };
    ${device.DesktopHD}{
        grid-template-columns: 80% 20%;
        grid-template-areas: "roomName burger";
    };
    grid-template-columns: 20% 60% 20%;
    grid-template-areas: "tab roomName burger";
`

const RoomDetail = ({...props}) => {
    const sampleGroupName = 'Insert Group Name Here' // mock data
    const { customStyle, toggleMenu, toggleTab, ...rest } = props
    return (
        <Element
            css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
            {...rest}>
                <Element
                    css='grid-area: tab; margin: 0; padding: 0; margin: 0; display: flex; flex-direction: row; justify-content: space-around;'>
                        <Tab customStyle='margin: auto 0;'/>
                </Element>
                <Element
                    css='grid-area: roomName; margin: 0; padding: 0; display: flex; flex-direction: row; justify-content: space-around;'>
                    <Heading 
                        customStyle='margin: 10px auto; font-family: Helvetica;'>
                            {sampleGroupName.length < 36 ? sampleGroupName : sampleGroupName.split('').filter((ch, i)=>i < 25).concat(['...']).join('')}
                    </Heading>
                </Element>
                <Element
                    css='grid-area: burger; margin: 0; display: flex; flex-direction: row; justify-content: space-around;'>
                    <Burger customStyle='margin: auto;' toggleMenu={toggleMenu}/>
                </Element>
        </Element>
    )
}

export default RoomDetail