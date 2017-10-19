import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import * as moment from 'moment';
import MessageHeader from '../MessageHeader';
import { getVisibleComments } from '../../../reducers';
import { fetchCommentsByPostId } from '../../../actions/comments';

class Post extends Component {
	componentDidMount() {
		const { fetchComments, post } = this.props;

		fetchComments(post.id);
	}

	render() {
		const { post, comments } = this.props;
		const {
			id,
			author,
			timestamp,
			category
		} = post;
		const formattedTime = moment(timestamp).format('MM/D/YYYY hh:mm:ss');
		const postUrl = `${category}/${id}`;
		const header = (
			<MessageHeader
				msg={post}
				titleUrl={postUrl}
				editUrl={`${postUrl}/edit`}
				replyUrl={`${postUrl}/reply`}
				handleDelete={this.handlePostDelete}
			/>
		);

		return (
			<Panel bsStyle="primary" header={header}>
				<p>{`submitted by ${author} at ${formattedTime}`}</p>
				<p>{`${comments.length} comments`}</p>
			</Panel>
		);
	}
}

const mapStateToProps = (state, { post }) => ({
	comments: getVisibleComments(state, post.id)
});

const mapDispatchToProps = {
	fetchComments: fetchCommentsByPostId
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Post);
