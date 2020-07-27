import React from 'react'

import { fakeGroupList } from './fakeData'
import { device } from '../../utils/responsiveBreakpoints'

import { Element } from '../Element'
import Heading from '../Heading'
import Tab from '../../pages/Home/MobileAndTablet/Tab'

import GroupCard from './GroupCard'

// For now, actual async calls are just simulated to show what the ui will look like on that scenario
import Spinner from '../Loading/Spinner'

const defaultStyle = () => {
    return `
        background-color: #e8e4c9;
        border: 1px solid silver;
        height: calc(100vh - 115px);
        width: 100%;
        background-color: white;
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

    // simulating async calls to show loading state of ui [data not ready]
    const [ asyncTimer, setTimer ] = React.useState(false)
    React.useEffect(()=>{
        setTimeout(()=>setTimer(true), 3000)
    })
    const renderLoadingBox = () => {
        return (
            <Element
                css='margin: 100px auto;'>
                    <Spinner/>
            </Element>
        )
    }
    // end of simulation on async calls

    const renderGroupList = () => {
        return (
            <Element
                css={groupListStyle()}>
                    {fakeGroupList.map(data=>{
                        return <GroupCard key={data.id} data={data}/>
                    })}
            </Element>
        )
    }
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
                {asyncTimer ? renderGroupList() : renderLoadingBox()}
        </Element>
    )
}

export default ClientGroupList