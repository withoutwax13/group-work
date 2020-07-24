import React from 'react'
import { Element } from '../Element'

import PropTypes from 'prop-types'

const defaultStyle = () => `
    padding: 5px;
`

const Avatar = ({...props}) => {
    const { customStyle, imageUrl, width, height, ...rest } = props
    if (imageUrl) return (
        <Element
            css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
            {...rest}>
                <Element
                    as='img'
                    css='border: 1px solid black; border-radius: 60px; cursor: pointer;'
                    width={width}
                    height={height}
                    src={imageUrl}/>
        </Element>
    )
    else {
        return (
            <Element
                css='border-radius: 5px; cursor: pointer; height: 30px; width: 30px;'/>
        )
    }
}

Avatar.propTypes = {
    customStyle: PropTypes.string,
    imageUrl: PropTypes.any.isRequired
}

export default Avatar