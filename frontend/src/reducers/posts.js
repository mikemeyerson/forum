import { combineReducers } from 'redux';
import {
	FETCH_POSTS_REQUEST,
	FETCH_POSTS_SUCCESS,
	ADD_POST_SUCCESS,
	INCREMENT_POST_SCORE_SUCCESS,
	DECREMENT_POST_SCORE_SUCCESS,
	EDIT_POST_SUCCESS,
	DELETE_POST_SUCCESS,
} from '../actions/types';

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

// TODO: Reorganize posts by filter? change .filter()

// Selectors
export const getPostById = (state, id) => {
	const post = state.byId[id] || {};

	return !post.deleted && post;
};

export const getPosts = (state, category) => {
	return state.allIds
		.filter(id => !state.byId[id].deleted && (state.byId[id].category === category || category === 'all'))
		.map(id => state.byId[id]);
};

export const getIsFetching = (state) => {
	return state.isFetching;
};

export default combineReducers({
	byId,
	allIds,
	isFetching
});
