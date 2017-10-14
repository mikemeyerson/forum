import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { addPost } from '../../../actions/posts';
import Form from '../../shared/Form';

const AddPost = ({ addPost, history }) => {

	const submitForm = (post) => {
		const newPost = {
			...post,
			id: v4(),
			timestamp: Date.now(),
			comments: []
		};

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
