import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { fetchCommentById, editComment } from '../../../actions/comments';
import { getCommentById } from '../../../reducers';
import Form from '../../shared/Form';

class EditComment extends Component {
	componentDidMount() {
		const { fetchCommentById, match } = this.props;

		fetchCommentById(match.params.commentId);
	}

	submitForm = (modifiedComment) => {
		const { editComment, history, match, comment } = this.props;

		editComment({
			...comment,
			...modifiedComment
		});

		history.push(`/${match.params.category}/${match.params.postId}`);
	};

	render() {
		const { comment } = this.props;
		const disabledFields = [
			'title',
			'author',
			'category'
		];

		return (
			<Grid>
				<Row>
					<Col lg={8}>
						<Form
							post={comment}
							onSubmit={this.submitForm}
							disabledFields={disabledFields}
						/>
					</Col>
				</Row>
			</Grid>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	comment: getCommentById(state, ownProps.match.params.commentId)
});

export default connect(
	mapStateToProps,
	{
		fetchCommentById,
		editComment
	}
)(EditComment);
