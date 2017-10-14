import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import Counter from '../../../shared/Counter';
import './PostPreview.css';
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
			body,
			timestamp,
			category
		} = post;

		return (
			<div className="post">
				<Link to={`${category}/${id}`}>{title} by {author}</Link>
				<p>{body}</p>
				<p>{moment(timestamp).format('MM/D/YYYY hh:mm:ss')}</p>
				<p>{comments.length} comments</p>
				<Counter msg={post} />
			</div>
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
