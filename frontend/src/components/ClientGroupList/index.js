import React from 'react'

import { device } from '../../utils/responsiveBreakpoints'

import { Element } from '../Element'
import Heading from '../Heading'
import Tab from '../../pages/Home/MobileAndTablet/Tab'

const defaultStyle = () => {
    return `
        background-color: #e8e4c9;
        border: 1px solid silver;
        height: 100%;
        width: 100%;
    `
}

const labelStyle = () => `
    width: 100%;
    height: 40px;
    background-color: black;
    display: grid;
    ${device.Desktop}{
        grid-template-columns: 100%;
        grid-template-areas: "title";
    };
    ${device.DesktopHD}{
        grid-template-columns: 100%%;
        grid-template-areas: "title";
    };
    grid-template-columns: 20% 60% 20%;
    grid-template-areas: "tab title .";
`
const groupListStyle = () => `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - 40px);
    overflow-y: auto;
`

const ClientGroupList = ({...props}) => {
    const { customStyle, ...rest } = props
    return (
        <Element
            css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
            {...rest}>
                <Element
                    css={labelStyle()}>
                        <Element
                            css='grid-area: tab; margin: 0; padding: 0; margin: 0; display: flex; flex-direction: row; justify-content: space-around;'>
                            <Tab 
                                customStyle='margin: auto 0;'/>
                        </Element>
                        <Element
                            css='grid-area: title; margin: 0; padding: 0; margin: 0; display: flex; flex-direction: row; justify-content: space-around;'>
                            <Heading 
                                customStyle='margin: 10px 0; padding: auto; font-family: Helvetica;'>
                                    Groups
                            </Heading>
                        </Element>
                </Element>
                <Element
                    css={groupListStyle()}>
                        {
                            // Array of group objects associated to client to be mapped here
                        }
                </Element>
        </Element>
    )
}

export default ClientGroupList