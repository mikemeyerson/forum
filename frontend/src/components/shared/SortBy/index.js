import React from 'react';
import { connect } from 'react-redux';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { sortByVoteScore, sortByTimestamp } from '../../../actions/sort';

const SortBy = ({sortByVoteScore, sortByTimestamp}) => (
	<DropdownButton id="sort" title="Sort by">
		<MenuItem onClick={sortByVoteScore}>
			Vote Score
		</MenuItem>
		<MenuItem onClick={sortByTimestamp}>
			Recent
		</MenuItem>
	</DropdownButton>
);

const mapDispatchToProps = {
	sortByVoteScore,
	sortByTimestamp
};

export default connect(
	null,
	mapDispatchToProps
)(SortBy);
