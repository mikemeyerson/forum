import React from 'react';
import { connect } from 'react-redux';
import { sortByVoteScore, sortByTimestamp } from '../../../actions/sort';

const SortBy = ({sortByVoteScore, sortByTimestamp}) => (
	<div>
		Sort by:
		<button onClick={sortByVoteScore}>
			Vote Score
		</button>
		<button onClick={sortByTimestamp}>
			Recent
		</button>
	</div>
);

const mapDispatchToProps = {
	sortByVoteScore,
	sortByTimestamp
};

export default connect(
	null,
	mapDispatchToProps
)(SortBy);
