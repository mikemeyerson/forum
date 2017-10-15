import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import SortBy from '../../../shared/SortBy';
import Comment from '../Comment';
import { getVisibleComments } from '../../../../reducers';
import {
	deleteComment,
	fetchCommentsByPostId
} from '../../../../actions/comments';

class CommentList extends Component {
	componentDidMount() {
		const { fetchCommentsByPostId, parentId } = this.props;

		fetchCommentsByPostId(parentId);
	}

	render() {
		const { comments, url, deleteComment } = this.props;

		return (
			<div>
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
					{comments.length > 0 && (
						<Col lg={5} className="text-right">
							<SortBy />
						</Col>
					)}
				</Row>
				{comments.map((comment) => (
					<Row key={comment.id}>
						<Col lg={10}>
							<Comment
								comment={comment}
								handleDelete={deleteComment}
								url={url}
							/>
						</Col>
					</Row>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	comments: getVisibleComments(state, ownProps.parentId)
});

const mapDispatchToProps = {
	fetchCommentsByPostId,
	deleteComment
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(CommentList));
