import { Element } from '../../Element'

const defaultStyle = ``

export default ({...props}) => {
	return (
		<Element
			css={props.style ? props.style : defaultStyle}
			{...props}>
				
		</Element>
	)
}