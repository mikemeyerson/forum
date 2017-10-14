import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

const AddPostButton = () => (
	<LinkContainer to="/add">
		<Button bsStyle="primary">
			Add Post
		</Button>
	</LinkContainer>
);

export default AddPostButton;
