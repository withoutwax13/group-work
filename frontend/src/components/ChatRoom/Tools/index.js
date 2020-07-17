import React from 'react'

import { Element } from '../../Element'
import Input from '../../Input'
import Button from '../../Button'

const defaultStyle = () => `
    display: grid;
    grid-template-columns: 3% 65% 4% 25% 3%;
    grid-template-areas: ". left . right .";
`

const Tools = ({...props}) => {
    const [ inputValue, setInputValue ] = React.useState('')
    return (
        <Element
            css={defaultStyle()}>
                <Input customStyle='grid-area: left;' value={inputValue} onChange={e=>setInputValue(e.target.value)} placeholder='Input message here'/>
                <Button type='primary' customStyle='grid-area: right;'>SEND</Button>
        </Element>
    )
}

export default Tools