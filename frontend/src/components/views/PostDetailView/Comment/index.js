import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Panel, ButtonGroup, Button } from 'react-bootstrap';
import Counter from '../../../shared/Counter';

const Comment = ({comment, url, handleDelete}) => {

	const onDeleteClick = () => {
		handleDelete(comment.id);
	};

	return (
		<Panel>
			<ButtonGroup>
				<LinkContainer to={`${url}/${comment.id}/edit`}>
					<Button>Edit</Button>
				</LinkContainer>
				<Button onClick={onDeleteClick}>
					Delete
				</Button>
			</ButtonGroup>
			<hr />
			<p>ID: {comment.id}</p>
			<p>Author: {comment.author}</p>
			<hr/>
			<p>{comment.body}</p>
			<Counter msg={comment} />
		</Panel>
	);
}

export default Comment;
