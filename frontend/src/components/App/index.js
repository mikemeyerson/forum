import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import NavBar from '../NavBar';
import PostList from '../PostList';
import PostDetails from '../PostDetails';
import AddPost from '../AddPost';
import EditPost from '../EditPost';
import AddComment from '../AddComment';

const App = () => (
	<div>
		<NavBar />
		<hr />
		<Switch>
			<Route exact path="/add" component={AddPost} />
			<Route exact path="/:category" component={PostList} />
			<Route exact path="/:category/:postId" component={PostDetails} />
			<Route exact path="/:category/:postId/edit" component={EditPost} />
			<Route exact path="/:category/:postId/reply" component={AddComment} />
			<Redirect from="/" to="/all"  />
		</Switch>
	</div>
);

export default App;
