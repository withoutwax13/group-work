import React from 'react'

import { Element } from '../../Element'

const defaultStyle = () => `
    height: calc(100% - 100px);
    width: 100%;
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