import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { isEmpty } from 'lodash';
import * as moment from 'moment';
import CommentList from './CommentList';
import MessageHeader from '../../shared/MessageHeader';
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

		if (post.deleted || isEmpty(post)) {
			return <Redirect to="/" />;
		}

		const { author, timestamp, category } = post;
		const formattedTime = moment(timestamp).format('MM/D/YYYY hh:mm:ss');
		const header = (
			<MessageHeader
				msg={post}
				editUrl={`${match.url}/edit`}
				replyUrl={`${match.url}/reply`}
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
