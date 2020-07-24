import React from 'react'
import { connect } from 'react-redux'

import { toggleMobileTab } from '../../../../modules/actions'

import { device } from '../../../../utils/responsiveBreakpoints'
import { Element } from '../../../../components/Element'
import Navigation from '../../../../components/Navigation'

const defaultStyle = () => `
    ${device.Desktop}{
        display: none;
    }
    ${device.DesktopHD}{
        display: none;
    }
    margin: auto;
    padding: auto;
    cursor: pointer;
    user-select: none;
    border: 1px solid white;
`

const Tab = (props) => {
    const { customStyle, toggleMobileTab } = props
    return (
        <Element
            css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
            onClick={toggleMobileTab}>
                <Navigation customStyle='background: transparent; color: white;'>Tab</Navigation>
        </Element>
    )
}

export default connect(null, { toggleMobileTab })(Tab)