import { combineReducers } from 'redux';
import {
	FETCH_POSTS_REQUEST,
	FETCH_POSTS_SUCCESS,
	ADD_POST_SUCCESS,
	INCREMENT_POST_SCORE_SUCCESS,
	DECREMENT_POST_SCORE_SUCCESS,
	EDIT_POST_SUCCESS,
	DELETE_POST_SUCCESS,
	SORT_BY_VOTE_SCORE,
	SORT_BY_TIMESTAMP
} from '../actions/posts';
import {
	FETCH_COMMENTS_BY_POST_SUCCESS,
	ADD_COMMENT_SUCCESS
} from '../actions/comments';

const byId = (state = {}, action) => {
	switch (action.type) {
		case FETCH_POSTS_SUCCESS:
		case ADD_POST_SUCCESS:
		case INCREMENT_POST_SCORE_SUCCESS:
		case DECREMENT_POST_SCORE_SUCCESS:
		case DELETE_POST_SUCCESS:
		case EDIT_POST_SUCCESS:
			return {
				...state,
				...action.response.entities.posts
			};
		// case FETCH_COMMENTS_BY_POST_SUCCESS:
		// 	return {
		// 		...state,
		// 		[action.parentId]: {
		// 			...state[action.parentId],
		// 			comments: action.response.result
		// 		}
		// 	};
		// case ADD_COMMENT_SUCCESS:
		// 	console.info('current comments', state[action.parentId].comments);
		// 	return {
		// 		...state,
		// 		[action.parentId]: {
		// 			...state[action.parentId],
		// 			comments: state[action.parentId].comments
		// 				? [...state[action.parentId].comments, action.response.result]
		// 				: [action.response.result]
		// 		}
		// 	};
		default:
			return state;
	}
};

// const createCategoryList = (category) => (state = [], action) => {
// 	if (category !== action.category && category !== 'all') {
// 		return state;
// 	}
//
// 	switch (action.type) {
// 		case FETCH_POSTS_SUCCESS:
// 			return action.response.result;
// 		case ADD_POST_SUCCESS:
// 			return [...state, action.response.result];
// 		default:
// 			return state;
// 	}
// };

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

const sortMethods = {
	byVoteScore(a, b) {
		return b.voteScore - a.voteScore;
	},

	byTimestamp(a, b) {
		return b.timestamp - a.timestamp;
	}
};

// TODO: Reorganize posts by filter? change .filter()

// Selectors
export const getPostById = (state, id) => {
	const post = state.byId[id] || {};

	return !post.deleted && post;
};

export const getPosts = (state, category) => {
	return state.allIds
		.filter(id => !state.byId[id].deleted && (state.byId[id].category === category || category === 'all'))
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
