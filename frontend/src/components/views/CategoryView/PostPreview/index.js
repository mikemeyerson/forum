import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Panel } from 'react-bootstrap';
import * as moment from 'moment';
import Counter from '../../../shared/Counter';
import { getVisibleComments } from '../../../../reducers';
import { fetchCommentsByPostId } from '../../../../actions/comments';

class PostPreview extends Component {
	componentDidMount() {
		const { fetchComments, post } = this.props;

		fetchComments(post.id);
	}

	render() {
		const { post, comments } = this.props;
		const {
			id,
			title,
			author,
			timestamp,
			category
		} = post;
		const formattedTime = moment(timestamp).format('MM/D/YYYY hh:mm:ss');

		return (
			<Panel>
				<Link to={`${category}/${id}`}>
					<h4>{title}</h4>
				</Link>
				<p>{`submitted by ${author} at ${formattedTime}`}</p>
				<p>{comments.length} comments</p>
				<Counter msg={post} />
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
)(PostPreview);
