import React from 'react';
import { connect } from 'react-redux';
import {
	incrementCommentScore,
	decrementCommentScore
} from '../../../actions/comments';
import {
	incrementPostScore,
	decrementPostScore
} from '../../../actions/posts';

const Counter = ({ msg, incrementPostScore, decrementPostScore, incrementCommentScore, decrementCommentScore }) => {
	const isPost = ('parentId' in msg) === false;
	const handleIncrement = isPost ? incrementPostScore : incrementCommentScore;
	const handleDecrement = isPost ? decrementPostScore : decrementCommentScore;

	return (
		<div className="vote-score">
			<button onClick={() => handleIncrement(msg.id)}>
				+
			</button>
			{msg.voteScore}
			<button onClick={() => handleDecrement(msg.id)}>
				-
			</button>
		</div>
	);
};

const mapDispatchToProps = {
	incrementPostScore,
	decrementPostScore,
	incrementCommentScore,
	decrementCommentScore
};

export default connect(
	null,
	mapDispatchToProps
)(Counter);
