import React from 'react'

import { Element } from '../../Element'
import Message from './Message'
import CollapseMenu from '../CollapseMenu'

const temporaryData = [
    {
        id: 1,
        user: 'Fake User 1',
        message: '123dsadasdsad4'
    },
    {
        id: 2,
        user: 'Fake User 2',
        message: '123242354dasdsadad'
    },
    {
        id: 3,
        user: 'Fake User 3',
        message: '123242354wqewwqrwer'
    },
    {
        id: 4,
        user: 'Fake User 4',
        message: 'sd;[l['
    },
    {
        id: 5,
        user: 'Fake User 5',
        message: '1ooooooppp2354'
    },
    {
        id: 6,
        user: 'Fake User 6',
        message: '1232423sdadad54'
    },
    {
        id: 1,
        user: 'Fake User 1',
        message: '123dsadasdsad4'
    },
    {
        id: 2,
        user: 'Fake User 2',
        message: '123242354dasdsadad'
    },
    {
        id: 3,
        user: 'Fake User 3',
        message: '123242354wqewwqrwer'
    },
    {
        id: 4,
        user: 'Fake User 4',
        message: 'sd;[l['
    },
    {
        id: 5,
        user: 'Fake User 5',
        message: '1ooooooppp2354'
    },
    {
        id: 6,
        user: 'Fake User 6',
        message: '1232423sdadad54'
    },
    {
        id: 99,
        user: 'Fake User 6',
        message: '1232423sdadad54'
    },
    {
        id: 233,
        user: 'Fake User 6',
        message: '1232423sdadad54'
    },
    {
        id: 12,
        user: 'Fake User 6',
        message: '1232423sdadad54'
    },
    {
        id: 2123,
        user: 'Fake User 6',
        message: '1232423sdadad54'
    },
    {
        id: 99,
        user: 'Fake User 6',
        message: '1232423sdadad54'
    },
    {
        id: 233,
        user: 'Fake User 6',
        message: '1232423sdadad54'
    },
    {
        id: 12,
        user: 'Fake User 6',
        message: '1232423sdadad54'
    },
    {
        id: 2123,
        user: 'Fake User 6',
        message: '1232423sdadad54'
    },
    {
        id: 99,
        user: 'Fake User 6',
        message: '1232423sdadad54'
    },
    {
        id: 233,
        user: 'Fake User 6',
        message: '1232423sdadad54'
    },
    {
        id: 12,
        user: 'Fake User 6',
        message: '1232423sdadad54'
    },
    {
        id: 2123,
        user: 'Fake User 6',
        message: '1232423sdadad54'
    }
]

const defaultStyle = () => `
    overflow-y: auto;
    margin: 5px auto;
    width: 100%;
    height: calc(100vh - 200px);
    background: transparent;
`

const Messages = ({...props}) => {
    const { menuCollapse } = props
    const renderMessages = () => {
        return temporaryData.map(data=>{
                return <Message message={data.message} key={data.id}/>
        })
    }
    
    return (
        <React.Fragment>
            <Element
                css={defaultStyle()}>
                    {renderMessages()}
            </Element>
            <Element>
                {
                    // Empty for now. Idk what did I do that it broke.
                }
                {menuCollapse ? `` : ``}
            </Element>
        </React.Fragment>
    )
}

export default Messages