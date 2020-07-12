import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Components
import { Element } from '../components/Element'
import Integrated from '../components/Integrated'

// Pages
import CreateAccount from '../pages/CreateAccount'
import SignIn from '../pages/SignIn'

const App = () => {
	return (
		<Element>
			<BrowserRouter>
				<Integrated>
				<Switch>
					<Route exact path='/sign-in' component={SignIn}/>
					<Route exact path='/create-account' component={CreateAccount}/>
					<Route component={CreateAccount}/>
				</Switch>
				</Integrated>
			</BrowserRouter>
		</Element>
	)
}

export default App