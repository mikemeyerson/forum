import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import * as moment from 'moment';
import CommentList from './CommentList';
import MessageHeader from './MessageHeader';
import { getPostById } from '../../../reducers';
import {
	deletePost,
	fetchPosts
} from '../../../actions/posts';

class PostDetailView extends Component {
	componentDidMount() {
		const { fetchPosts } = this.props;

		fetchPosts();
	}

	handlePostDelete = (id) => {
		const { deletePost, history, post } = this.props;

		deletePost(id);
		history.push(`/${post.category}`);
	};

	render() {
		const { post, match } = this.props;
		const { author, timestamp, category } = post;
		const formattedTime = moment(timestamp).format('MM/D/YYYY hh:mm:ss');
		const header = (
			<MessageHeader
				msg={post}
				url={match.url}
				handleDelete={this.handlePostDelete}
			/>
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
				<CommentList url={match.url} parentId={match.params.postId} />
			</Grid>
		);
	}
};

const mapStateToProps = (state, ownProps) => ({
	post: getPostById(state, ownProps.match.params.postId)
});

const mapDispatchToProps = {
	deletePost,
	fetchPosts
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostDetailView);
