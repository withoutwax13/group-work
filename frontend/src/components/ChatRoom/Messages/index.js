import React from 'react'

import { Element } from '../../Element'

const defaultStyle = () => `
    overflow-y: auto;
    margin: 10px 0;
    width: 100%;
    height: calc(100% - 90px);
    background: transparent;
`

const Messages = ({...props}) => {
    return (
        <Element
            css={defaultStyle()}>

        </Element>
    )
}

export default Messages