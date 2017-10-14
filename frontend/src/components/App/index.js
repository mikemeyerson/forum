import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import NavBar from './NavBar';
import CategoryView from '../views/CategoryView';
import PostDetailView from '../views/PostDetailView';
import AddPost from '../views/AddPost';
import EditPost from '../views/EditPost';
import AddComment from '../views/AddComment';
import EditComment from '../views/EditComment';

const App = () => (
	<div>
		<NavBar />
		<hr />
		<Switch>
			<Route exact path="/add" component={AddPost} />
			<Route exact path="/:category" component={CategoryView} />
			<Route exact path="/:category/:postId" component={PostDetailView} />
			<Route exact path="/:category/:postId/edit" component={EditPost} />
			<Route exact path="/:category/:postId/reply" component={AddComment} />
			<Route exact path="/:category/:postId/:commentId/edit" component={EditComment} />
			<Redirect from="/" to="/all"  />
		</Switch>
	</div>
);

export default App;
