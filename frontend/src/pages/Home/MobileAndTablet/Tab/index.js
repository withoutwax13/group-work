import React from 'react'

import { Element } from '../../../../components/Element'

import ChatRoom from '../../../../components/ChatRoom'
import ChatRoomList from '../../../../components/ChatRoomList'
import ClientGroupList from '../../../../components/ClientGroupList'

const defaultStyle = () => {
    return ``
}

// TabBox as button is a temporary solution for ui feature of determining which tab is active
// and will be replaced by a better ui

const TabBox = ({...props}) => {
    const { tabName, ...rest } = props
    const defaultStyle = `
        width: 33.33%;
        height: 20px;
        padding: 5px auto;
        text-align: center;
        border-radius: 5px;
        border: 1px solid black;
        cursor: pointer;
    `
    return (
        <Element
            as='button'
            css={defaultStyle}
            {...rest}>
                {tabName}
        </Element>
    )
}

const Tab = ({...props}) => {
    const { customStyle, ...rest } = props
    const [ currentTab, setTab ] = React.useState('Chat Room')

    const renderCurrentTab = () => {
        switch(currentTab){
            case 'Chat Room':
                return <ChatRoom/>
            case 'Active Rooms':
                return <ChatRoomList/>
            case 'Your Groups':
                return <ClientGroupList/>
            default:
                return <ChatRoom/>
        }
    }

    return (
        <Element
            css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
            {...rest}>
                <Element
                    css='display: flex; flex-direction: row;'>
                    <TabBox tabName='Chat Room' onClick={()=>setTab('Chat Room')}/>
                    <TabBox tabName='Active Rooms'onClick={()=>setTab('Active Rooms')}/>
                    <TabBox tabName='Your Groups'onClick={()=>setTab('Your Groups')}/>
                </Element>
                <Element
                    css='width: 100%; height: calc(100vh - 240px);'>
                        {renderCurrentTab()}
                </Element>
        </Element>
    )
}

export default Tab