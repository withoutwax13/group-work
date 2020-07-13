import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Components
import { Element } from '../components/Element'
import Integrated from '../components/Integrated'

// Pages
import Landing from '../pages/Landing'

const App = ({IS_CLIENT_LOGGED}) => {
	return (
		<Element>
			<BrowserRouter>
				<Integrated>
				<Switch>
					<Route exact path='/' component={IS_CLIENT_LOGGED ? null : Landing}/>
					<Route component={Landing}/>
				</Switch>
				</Integrated>
			</BrowserRouter>
		</Element>
	)
}

App.propTypes = {
	IS_CLIENT_LOGGED: PropTypes.bool.isRequired
}

const mapStateToProps = ({IS_CLIENT_LOGGED}) => {
	return {
		IS_CLIENT_LOGGED
	}
}

export default connect(mapStateToProps)(App)