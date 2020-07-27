import React from 'react'

import { Element } from '../../Element'
import Message from './Message'
import CollapseMenu from '../CollapseMenu'

import { temporaryData } from './fakeData'

// For now, actual async calls are just simulated to show what the ui will look like on that scenario
import Spinner from '../../Loading/Spinner'

const defaultStyle = () => `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`

const messagesContainerStyle = () => `
    overflow-y: auto;
    margin: 5px 0;
    width: 100%;
    height: calc(100vh - 200px);
    background: transparent;
`

const Messages = ({...props}) => {
    const { menuCollapse, toggleMenu } = props

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

    // rendering simulation: temporarily assume that elements on temporaryData with id === 1 as the current user
    const renderMessages = () => {
        return temporaryData.map(data=>{
                return <Message isClient={data.id === 1 ? true : false} data={data} key={data.id}/>
        })
    }

    const renderMenuCollapse = () => {
        return menuCollapse ? <CollapseMenu/> : null 
    }
    
    return (
        <Element
            onClick={menuCollapse ? toggleMenu : null}>
            <Element
                css={defaultStyle()}>
                <Element
                    css={messagesContainerStyle()}>
                        {
                            // asyncTimer simulates async nature of javascript when fetching api requests, etc
                        }
                        {asyncTimer ? renderMessages() : renderLoadingBox()}
                </Element>
                {renderMenuCollapse()}
            </Element>
        </Element>
    )
}

export default Messages