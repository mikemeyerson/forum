import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
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
		<Form
			onSubmit={submitForm}
			disabledFields={disabledFields}
		/>
	);
}

export default connect(
	null,
	{ addComment }
)(AddComment);
