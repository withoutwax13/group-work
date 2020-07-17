import styled from 'styled-components'

export const Element = styled.div`
	margin: ${(props)=>isPropProvided(props.margin)};
	margin-top: ${(props)=>isPropProvided(props.margintop)};
	margin-bottom: ${(props)=>isPropProvided(props.marginbottom)};
	margin-left: ${(props)=>isPropProvided(props.marginleft)};
	margin-right: ${(props)=>isPropProvided(props.marginright)};
	padding: ${(props)=>isPropProvided(props.padding)};
	padding-top: ${(props)=>isPropProvided(props.paddingtop)};
	padding-bottom: ${(props)=>isPropProvided(props.paddingbottom)};
	padding-left: ${(props)=>isPropProvided(props.paddingleft)};
	padding-right: ${(props)=>isPropProvided(props.paddingright)};
	${(props)=>props.css || ``}
`

// returns the value if defined
const isPropProvided = value => {
	if (typeof value !== 'undefined') return value
	else return null
}