import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
			category,
			handleIncrement,
			handleDecrement
		} = this.props;

		return (
			<div className="post">
				<Link to={`${category}/${id}`}>{title} by {author}</Link>
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
