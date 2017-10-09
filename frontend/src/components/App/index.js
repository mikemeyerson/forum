import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../Home';
import AddPost from '../AddPost';

// TODO: fix category in url
const App = () => (
	<div>
		<Route exact path="/" component={Home} />
		<Route exact path="/add" component={AddPost} />
	</div>
);

export default App;
