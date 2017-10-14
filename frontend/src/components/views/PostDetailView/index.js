import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import Comment from './Comment';
import Counter from '../../shared/Counter';
import SortBy from '../../shared/SortBy';
import { getPostById, getVisibleComments } from '../../../reducers';
import {
	deleteComment,
	fetchCommentsByPostId
} from '../../../actions/comments';
import {
	deletePost,
	fetchPosts
} from '../../../actions/posts';

class PostDetailView extends Component {

	componentDidMount() {
		const { fetchPosts, fetchCommentsByPostId, match } = this.props;

		fetchPosts();
		fetchCommentsByPostId(match.params.postId);
	}

	handlePostDelete = () => {
		const { deletePost, history, post } = this.props;

		deletePost(post.id);
		history.push(`/${post.category}`);
	};

	handleCommentDelete = (id) => {
		const { deleteComment } = this.props;

		deleteComment(id);
	};

	render() {
		const { post, match, comments } = this.props;

		return (
			<div>
				<div>
					<Link to={`${match.url}/edit`}>
						<button>Edit</button>
					</Link>
					<button onClick={this.handlePostDelete}>
						Delete
					</button>
					<Link to={`${match.url}/reply`}>
						<button>Reply</button>
					</Link>
				</div>
				<div className="post">
					<p>ID: {post.id}</p>
					<p>Title: {post.title}</p>
					<p>Author: {post.author}</p>
					<hr/>
					<p>{post.body}</p>
					<p>{moment(post.timestamp).format('MM/D/YYYY hh:mm:ss')}</p>
					<Counter msg={post} />
				</div>
				<p>{`${comments.length} comments`}</p>
				<SortBy />
				<ul>
					{comments.map((comment) => (
						<Comment
							key={comment.id}
							comment={comment}
							handleDelete={this.handleCommentDelete}
							url={match.url}
						/>
					))}
				</ul>
			</div>
		);
	}
};

const mapStateToProps = (state, ownProps) => ({
	post: getPostById(state, ownProps.match.params.postId),
	comments: getVisibleComments(state, ownProps.match.params.postId)
});

const mapDispatchToProps = {
	deletePost,
	fetchPosts,
	fetchCommentsByPostId,
	deleteComment
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostDetailView);
