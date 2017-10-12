import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPostById } from '../../reducers';
import { deletePost, fetchPosts } from '../../actions/posts';

class PostDetails extends Component {

	componentDidMount() {
		this.props.fetchPosts();
	}

	handleDelete = (id) => {
		const { deletePost, history } = this.props;

		deletePost(id);
		history.push('/');
	};

	render() {
		const { post } = this.props;

		return (
			<div>
				<div>
					<Link to={`/edit/${post.id}`}>
						<button>Edit</button>
					</Link>
					<button onClick={() => this.handleDelete(post.id)}>
						Delete
					</button>
					<button>
						Reply
					</button>
				</div>
				<p>ID: {post.id}</p>
				<p>Title: {post.title}</p>
				<p>Author: {post.author}</p>
				<hr/>
				<p>{post.body}</p>
			</div>
		);
	}
};

const mapStateToProps = (state, ownProps) => ({
	post: getPostById(state, ownProps.match.params.id)
});

const mapDispatchToProps = {
	deletePost,
	fetchPosts
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostDetails);
