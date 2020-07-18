import React from 'react'

import { Element } from '../../Element'
import CollapseMenu from '../CollapseMenu'

const defaultStyle = () => `
        cursor: pointer; 
        padding: 10px; 
        width: 20px; 
        height: 20px; 
        margin: auto 0 auto auto; 
        font-weight: bold; 
        background: transparent;
        color: white; 
        &:hover{ color: gray; }
        user-select: none;
    `

const Burger = ({...props}) => {
    const [ collapseMenu, setCollapse ] = React.useState(false)
    const renderMenu = () => {
        if (collapseMenu){
            return (
                <CollapseMenu/>
            )
        }
    }
    return (
        <Element
            css='display: flex; flex-direction: column;'>
            <Element 
                css={defaultStyle()}
                onClick={()=>setCollapse(!collapseMenu)}>
                    {collapseMenu ? `x` : `...`}
            </Element>
            {renderMenu()}
        </Element>
    )
}

export default Burger