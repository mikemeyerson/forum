import React from 'react';
import { connect } from 'react-redux';
import { FaArrowUp, FaArrowDown } from 'react-icons/lib/fa';
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
	const style = {
		"display": "flex"
	};

	return (
		<div style={style}>
			<FaArrowUp onClick={() => handleIncrement(msg.id)} />
			<h4>{msg.voteScore}</h4>
			<FaArrowDown onClick={() => handleDecrement(msg.id)} />
		</div>
	);
};

// TODO: Could place logic to map comment/post increment and decrement
// handlers here instead
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
