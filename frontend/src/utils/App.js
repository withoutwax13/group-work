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
import PageNotFound from '../pages/PageNotFound'
import LoadingPage from '../pages/Loading'

const App = ({IS_CLIENT_LOGGED}) => {

	return (
		<Element>
			<BrowserRouter>
				<Integrated>
				<Switch>
					<Route exact path='/' component={()=>{
						if (IS_CLIENT_LOGGED === true){
							return <Home/>
						}
						else if (IS_CLIENT_LOGGED === false){
							return <Landing/>
						}
						else return <LoadingPage/>
					}}/>
					<Route component={PageNotFound}/>
				</Switch>
				</Integrated>
			</BrowserRouter>
		</Element>
	)
}

App.propTypes = {
	IS_CLIENT_LOGGED: PropTypes.bool
}

const mapStateToProps = ({CLIENT_LOG_DATA}) => {
	return {
		IS_CLIENT_LOGGED: CLIENT_LOG_DATA.isSignedIn
	}
}

export default connect(mapStateToProps)(App)