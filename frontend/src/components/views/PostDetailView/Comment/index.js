import React from 'react';
import { Panel } from 'react-bootstrap';
import MessageHeader from '../../../shared/MessageHeader';

const Comment = ({comment, url, handleDelete}) => {
	const header = (
		<MessageHeader
			msg={comment}
			editUrl={`${url}/${comment.id}/edit`}
			handleDelete={handleDelete}
		/>
	);

	return (
		<Panel header={header}>
			<p>{comment.body}</p>
		</Panel>
	);
}

export default Comment;
