import React, { Component } from 'react';
import * as moment from 'moment';
import './Post.css';

class Post extends Component {
	render() {
		const {
			id,
			title,
			author,
			body,
			voteScore,
			timestamp,
			handleIncrement,
			handleDecrement,
			handleDelete
		} = this.props;

		return (
			<div className="post">
				<div>
					<button>
						Edit
					</button>
					<button onClick={() => handleDelete(id)}>
						Delete
					</button>
					<button>
						Reply
					</button>
				</div>
				<p>{title} by {author}</p>
				<p>{body}</p>
				<p>{moment(timestamp).format('MM/D/YYYY hh:mm:ss')}</p>
				<div className="vote-score">
					<button onClick={() => handleIncrement(id)}>
						+
					</button>
					{voteScore}
					<button onClick={() => handleDecrement(id)}>
						-
					</button>
				</div>
			</div>
		);
	}
}

export default Post;
