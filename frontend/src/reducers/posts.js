import { combineReducers } from 'redux';
import {
	FETCH_POSTS_REQUEST,
	FETCH_POSTS_SUCCESS,
	ADD_POST_SUCCESS,
	INCREMENT_POST_SCORE_SUCCESS,
	DECREMENT_POST_SCORE_SUCCESS,
	DELETE_POST_SUCCESS,
	SORT_BY_VOTE_SCORE,
	SORT_BY_TIMESTAMP
 } from '../actions/posts';

// posts: {
// 	byId: {
// 		pid1: {
// 			timestamp: "",
// 			title: "",
// 			body: "",
// 			author: "",
// 			category: "name1",
// 			voteScore: 1,
// 			deleted: false,
// 			comments: ["cid1"]
// 		}
// 	}
// 	allIds: ['pid1']
// },

const byId = (state = {}, action) => {
	switch (action.type) {
		case FETCH_POSTS_SUCCESS:
		case ADD_POST_SUCCESS:
		case INCREMENT_POST_SCORE_SUCCESS:
		case DECREMENT_POST_SCORE_SUCCESS:
		case DELETE_POST_SUCCESS:
			return {
				...state,
				...action.response.entities.posts
			};
		default:
			return state;
	}
};

const allIds = (state = [], action) => {
	switch (action.type) {
		case FETCH_POSTS_SUCCESS:
			return action.response.result;
		case ADD_POST_SUCCESS:
			return [...state, action.response.result];
		default:
			return state;
	}
};

const isFetching = (state = false, action) => {
	switch (action.type) {
		case FETCH_POSTS_REQUEST:
			return true;
		case FETCH_POSTS_SUCCESS:
			return false;
		default:
			return state;
	}

};

const sort = (state = 'sortByVoteScore', action) => {
	switch (action.type) {
		case SORT_BY_VOTE_SCORE:
			return 'byVoteScore';
		case SORT_BY_TIMESTAMP:
			return 'byTimestamp';
		default:
			return state;
	}
};

const sortMethods = {
	byVoteScore(a, b) {
		return b.voteScore - a.voteScore;
	},

	byTimestamp(a, b) {
		return b.timestamp - a.timestamp;
	}
};

// Selectors
export const getVisiblePosts = (state) => {
	return state.allIds
		.filter(id => !state.byId[id].deleted)
		.map(id => state.byId[id])
		.sort(sortMethods[state.sort]);
};

export const getIsFetching = (state) => {
	return state.isFetching;
};

export default combineReducers({
	byId,
	allIds,
	isFetching,
	sort
});
