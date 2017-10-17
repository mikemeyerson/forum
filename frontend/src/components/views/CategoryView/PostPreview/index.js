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
		const header = (
			<div style={{display: "flex"}}>
				<Counter msg={post} />
				<Link to={`${category}/${id}`}>
					<h4 style={{marginLeft: "15px"}}>{title}</h4>
				</Link>
			</div>
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
)(PostPreview);
