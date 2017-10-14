import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../../../shared/Counter';

const Comment = ({comment, url, handleDelete}) => {

	const onDeleteClick = () => {
		handleDelete(comment.id);
	};

	return (
		<div
			style={{ border: "1px solid black" }}
			className="comment"
		>
			<div>
				<Link to={`${url}/${comment.id}/edit`}>
					<button>Edit</button>
				</Link>
				<button onClick={onDeleteClick}>
					Delete
				</button>
			</div>
			<hr />
			<p>ID: {comment.id}</p>
			<p>Author: {comment.author}</p>
			<hr/>
			<p>{comment.body}</p>
			<Counter msg={comment} />
		</div>
	);
}

export default Comment;
