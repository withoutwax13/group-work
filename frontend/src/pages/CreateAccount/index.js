import React from 'react'

import { Element } from '../../components/Element'

const defaultStyle = ``

const CreateAccount = ({...props}) => {
	return (
		<Element
			css={defaultStyle}
			{...props}>
			CreateAccount
		</Element>
	)
}

export default CreateAccount