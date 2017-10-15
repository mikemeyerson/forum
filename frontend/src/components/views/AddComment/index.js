import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { Grid, Row, Col } from 'react-bootstrap';
import { addComment } from '../../../actions/comments';
import Form from '../../shared/Form';

const AddComment = ({ addComment, history, match }) => {

	const disabledFields = [
		'title',
		'category'
	];

	const submitForm = (comment) => {
		const { category, postId } = match.params;
		const newComment = {
			...comment,
			id: v4(),
			timestamp: Date.now(),
			parentId: match.params.postId
		};

		addComment(newComment);
		history.push(`/${category}/${postId}`);
	};

	return (
		<Grid>
			<Row>
				<Col lg={8}>
					<Form
						onSubmit={submitForm}
						disabledFields={disabledFields}
					/>
				</Col>
			</Row>
		</Grid>
	);
}

export default connect(
	null,
	{ addComment }
)(AddComment);
