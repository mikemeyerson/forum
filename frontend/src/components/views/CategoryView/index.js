import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';
import NoPostsFound from './NoPostsFound';
import Loader from './Loader';
import {
	getVisiblePosts,
	getIsFetching
} from '../../../reducers';
import { fetchPosts } from '../../../actions/posts';

class CategoryView extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		const {
			posts,
			isFetching
		} = this.props;

		if (posts.length) {
			return <PostList posts={posts} />;
		} else if (isFetching) {
			return <Loader />;
		} else {
			return <NoPostsFound />;
		}
	}
}

const mapStateToProps = (state, { match }) => {
	const category = match.params.category

	return {
		isFetching: getIsFetching(state),
		posts: getVisiblePosts(state, category)
	}
};

const mapDispatchToProps = {
	fetchPosts
};

 export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CategoryView);
