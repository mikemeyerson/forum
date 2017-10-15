import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { Grid, Row, Col } from 'react-bootstrap';
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
		<Grid>
			<Row>
				<Col lg={8}>
					<Form onSubmit={submitForm} />
				</Col>
			</Row>
		</Grid>
	);
}

export default connect(
	null,
	{ addPost }
)(AddPost);
