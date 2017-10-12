import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { some, isEmpty, isInteger } from 'lodash';
import { addPost } from '../../actions/posts';
import Form from '../Form';

const AddPost = ({ addPost, history }) => {

	const submitForm = (post) => {
		const newPost = {
			...post,
			id: v4(),
			timestamp: Date.now()
		};

		// TODO: Add error message
		if (some(newPost, (val) => isEmpty(val) && !isInteger(val))) {
			return;
		}

		addPost(newPost);
		history.push('/');
	};

	return (
		<Form onSubmit={submitForm} />
	);
}

export default connect(
	null,
	{ addPost }
)(AddPost);
