 const sortMethods = {
	byVoteScore(a, b) {
		return b.voteScore - a.voteScore;
	},

	byTimestamp(a, b) {
		return b.timestamp - a.timestamp;
	}
};

export default sortMethods;
