import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SortBy from '../../shared/SortBy';
import PostPreview from './PostPreview';
import {
	getVisiblePosts,
	getIsFetching
} from '../../../reducers';
import { fetchPosts } from '../../../actions/posts';

class CategoryView extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	displayPosts = () => {
		const { posts } = this.props;

		// TODO: Prefill the category in form based on URL param?
		if (!posts.length) {
			return (
				<div>
					There's nothing here yet.{" "}
					<Link to="/add">Start the conversation.</Link>
				</div>
			);
		} else {
			return (
				<ul>
					{posts.map((post) => (
						<PostPreview key={post.id} post={post} />
					))}
				</ul>
			);
		}
	};

	render() {
		const {
			posts,
			isFetching
		} = this.props;

		return (
			<div>
				<Link to="/add"><h4>Add Post</h4></Link>
				<SortBy />
				{isFetching && !posts.length
					? (<p>Loading posts...</p>)
					: (this.displayPosts())
				}
			</div>
		);
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
