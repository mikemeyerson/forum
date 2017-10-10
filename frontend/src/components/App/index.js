import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import NavBar from '../NavBar';
import Home from '../Home';
import AddPost from '../AddPost';

const App = () => (
	<div>
		<NavBar />
		<hr />
		<Switch>
			<Route exact path="/add" component={AddPost} />
			<Route path="/:category" component={Home} />
			<Redirect from="/" to="/all"  />
		</Switch>
	</div>
);

export default App;
