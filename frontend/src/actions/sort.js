import {
	SORT_BY_VOTE_SCORE,
	SORT_BY_TIMESTAMP
} from './types';

export const sortByVoteScore = () => ({
	type: SORT_BY_VOTE_SCORE
});

export const sortByTimestamp = () => ({
	type: SORT_BY_TIMESTAMP
});
