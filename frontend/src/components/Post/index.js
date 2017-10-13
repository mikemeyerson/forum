import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import './Post.css';
import { getVisibleComments } from '../../reducers';
import { fetchCommentsByPostId } from '../../actions/comments';
import * as postActions from '../../actions/posts';

class Post extends Component {
	componentDidMount() {
		const { fetchComments, id } = this.props;

		fetchComments(id);
	}

	handleIncrement = () => {
		const { incrementPostScore, id } = this.props;

		incrementPostScore(id);
	};

	handleDecrement = () => {
		const { decrementPostScore, id } = this.props;

		decrementPostScore(id);
	};

	render() {
		const {
			id,
			title,
			author,
			body,
			voteScore,
			timestamp,
			category,
			comments
		} = this.props;

		return (
			<div className="post">
				<Link to={`${category}/${id}`}>{title} by {author}</Link>
				<p>{body}</p>
				<p>{moment(timestamp).format('MM/D/YYYY hh:mm:ss')}</p>
				<p>{comments.length} comments</p>
				<div className="vote-score">
					<button onClick={this.handleIncrement}>
						+
					</button>
					{voteScore}
					<button onClick={this.handleDecrement}>
						-
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, { id }) => ({
	comments: getVisibleComments(state, id)
});

const mapDispatchToProps = {
	fetchComments: fetchCommentsByPostId,
	incrementPostScore: postActions.incrementPostScore,
	decrementPostScore: postActions.decrementPostScore
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Post);
