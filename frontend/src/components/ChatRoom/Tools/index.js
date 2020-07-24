import React from 'react'

import { Element } from '../../Element'
import Input from '../../Input'
import Button from '../../Button'

const defaultStyle = () => `
    margin-top: auto;
    margin-bottom: 10px;
    height: 25px;
    display: grid;
    grid-template-columns: 2% 71% 3% 22% 2%;
    grid-template-areas: ". left . right .";
`

const Tools = ({...props}) => {
    const [ inputValue, setInputValue ] = React.useState('')
    return (
        <Element
            css={defaultStyle()}>
                <Input customStyle='grid-area: left; padding: 5px;' value={inputValue} onChange={e=>setInputValue(e.target.value)} placeholder='Input message here'/>
                <Button type='primary' customStyle='grid-area: right;'>SEND</Button>
        </Element>
    )
}

export default Tools