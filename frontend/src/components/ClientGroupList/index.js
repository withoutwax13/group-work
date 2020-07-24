import React from 'react'

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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
                        <Tab customStyle='margin-left: 20px;'/>
                        <Heading customStyle='margin: auto 20px; font-family: Helvetica;'>
                            Your Groups
                        </Heading>
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