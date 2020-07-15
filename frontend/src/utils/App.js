import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Components
import { Element } from '../components/Element'
import Integrated from '../components/Integrated'

// Pages
import Landing from '../pages/Landing'
import Home from '../pages/Home'

const App = ({IS_CLIENT_LOGGED}) => {
	return (
		<Element>
			<BrowserRouter>
				<Integrated>
				<Switch>
					<Route exact path='/' component={IS_CLIENT_LOGGED ? Home : Landing}/>
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

const mapStateToProps = ({CLIENT_LOG_DATA}) => {
	return {
		IS_CLIENT_LOGGED: CLIENT_LOG_DATA.isSignedIn
	}
}

export default connect(mapStateToProps)(App)