import styled from 'styled-components'

export const Element = styled.div`
	margin: ${(props)=>isPropProvided(props.margin)};
	margin-top: ${(props)=>isPropProvided(props.marginTop)};
	margin-bottom: ${(props)=>isPropProvided(props.marginBottom)};
	margin-left: ${(props)=>isPropProvided(props.marginLeft)};
	margin-right: ${(props)=>isPropProvided(props.marginRight)};
	padding: ${(props)=>isPropProvided(props.padding)};
	padding-top: ${(props)=>isPropProvided(props.paddingTop)};
	padding-bottom: ${(props)=>isPropProvided(props.paddingBottom)};
	padding-left: ${(props)=>isPropProvided(props.paddingLeft)};
	padding-right: ${(props)=>isPropProvided(props.paddingRight)};
	${(props)=>props.css || ``}
`

// returns the value if defined
const isPropProvided = value => {
	if (typeof value !== 'undefined') return value
	else return null
}