import React from 'react'
import { Element } from '../Element'

const defaultStyle = () => `
    padding: 5px;
`

const Avatar = ({...props}) => {
    const { customStyle, imageUrl, ...rest } = props
    return (
        <Element
            css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
            {...rest}>
                <Element
                    as='img'
                    css='border: 1px solid black; border-radius: 60px; cursor: pointer;'
                    src={imageUrl}
                    onClick={()=>window.open(imageUrl, '_blank')}/>
        </Element>
    )
}

export default Avatar