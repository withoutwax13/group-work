import React, { useState, useEffect } from 'react'

import { Element } from '../../Element'

const defaultStyle = (trigger) => `
	margin: auto;
	border: 3px solid;
	width: 30px;
	height: 30px;
	border-radius: 60px;
	${
		trigger ? 
		`border-top-color: white; border-left-color: black; border-bottom-color: white; border-right-color: black;` :
		`border-top-color: black; border-left-color: white; border-bottom-color: black; border-right-color: white;`
	}}
`

const Spinner = (props) => {
	const [ trigger, setTrigger ] = useState(false)
	useEffect(()=>{
		const timer = setTimeout(()=>setTrigger(!trigger), 500)
		clearInterval(timer)
	}, [trigger])
	return (
		<Element
			css={defaultStyle(trigger)}/>
	)
}

export default Spinner