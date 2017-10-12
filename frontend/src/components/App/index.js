import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import NavBar from '../NavBar';
import PostList from '../PostList';
import PostDetails from '../PostDetails';
import AddPost from '../AddPost';
import EditPost from '../EditPost';

const App = () => (
	<div>
		<NavBar />
		<hr />
		<Switch>
			<Route exact path="/add" component={AddPost} />
			<Route exact path="/edit/:id" component={EditPost} />
			<Route exact path="/:category" component={PostList} />
			<Route path ="/:category/:id" component={PostDetails} />
			<Redirect from="/" to="/all"  />
		</Switch>
	</div>
);

export default App;
