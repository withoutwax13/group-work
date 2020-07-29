import React from 'react'
import { connect } from 'react-redux'

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
    const { customStyle, toggleMenu, toggleTab, ACTIVE_GROUP, ...rest } = props
    const renderGroupName = () => {
        if (ACTIVE_GROUP){
            return ACTIVE_GROUP.length < 36 ? ACTIVE_GROUP : ACTIVE_GROUP
                                                                        .split('')
                                                                        .filter((ch, i)=>i < 36)
                                                                        .concat(['...'])
                                                                        .join('')
        }
        else {
            return `Select a group`
        }
    }
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
                            {renderGroupName()}
                    </Heading>
                </Element>
                <Element
                    css='grid-area: burger; margin: 0; display: flex; flex-direction: row; justify-content: space-around;'>
                    <Burger customStyle='margin: auto;' toggleMenu={toggleMenu}/>
                </Element>
        </Element>
    )
}

const mapStateToProps = ({ACTIVE_GROUP}) => {
    return {
        ACTIVE_GROUP: ACTIVE_GROUP.groupName
    }
}

export default connect(mapStateToProps)(RoomDetail)