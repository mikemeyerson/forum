import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import * as moment from 'moment';
import Comment from './Comment';
import PostHeader from './PostHeader';
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
		const { author, timestamp, category } = post;
		const formattedTime = moment(timestamp).format('MM/D/YYYY hh:mm:ss');
		const header = (
			<PostHeader post={post} url={match.url} handlePostDelete={this.handlePostDelete} />
		);
		const footer = (
			<span>{`submitted by ${author} to "${category}" at ${formattedTime}`}</span>
		);

		return (
			<Grid>
				<Row>
					<Col lg={10}>
						<Panel bsStyle="primary" header={header} footer={footer}>
							<p>{post.body}</p>
						</Panel>
					</Col>
				</Row>
				<Row>
					<Col lg={10}>
						<hr />
					</Col>
				</Row>
				<Row>
					<Col lg={5}>
						<h4>
							{`Viewing ${comments.length} comments`}
						</h4>
					</Col>
					<Col lg={5} className="text-right">
						<SortBy />
					</Col>
				</Row>
				<Row>
					<Col lg={10}>
						{comments.map((comment) => (
							<Comment
								key={comment.id}
								comment={comment}
								handleDelete={this.handleCommentDelete}
								url={match.url}
							/>
						))}
					</Col>
				</Row>
			</Grid>
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
