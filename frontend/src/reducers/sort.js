import {
	SORT_BY_VOTE_SCORE,
	SORT_BY_TIMESTAMP
} from '../actions/sort';

const sort = (state = 'byVoteScore', action) => {
	switch (action.type) {
		case SORT_BY_VOTE_SCORE:
			return 'byVoteScore';
		case SORT_BY_TIMESTAMP:
			return 'byTimestamp';
		default:
			return state;
	}
};

export default sort;
