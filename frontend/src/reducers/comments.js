import { combineReducers } from 'redux';
import {
	FETCH_COMMENTS_BY_POST_SUCCESS,
	ADD_COMMENT_SUCCESS
} from '../actions/comments';

const byId = (state = {}, action) => {
	switch (action.type) {
		case FETCH_COMMENTS_BY_POST_SUCCESS:
		case ADD_COMMENT_SUCCESS:
			return {
				...state,
				...action.response.entities.comments
			};
		default:
			return state;
	}
};

const allIds = (state = [], action) => {
	switch (action.type) {
		case FETCH_COMMENTS_BY_POST_SUCCESS:
			return [...state, ...action.response.result];
		case ADD_COMMENT_SUCCESS:
			return [...state, action.response.result];
		default:
			return state;
	}
};

// Selectors
export const getComments = (state, postId) => {
	return state.allIds
		.filter((id) => !state.byId[id].deleted && state.byId[id].parentId === postId)
		.map((id) => state.byId[id]);
};

export const getCommentById = (state, id) => {
	const comment = state.byId[id] || {};

	return !comment.deleted && comment;
};

export default combineReducers({
	byId,
	allIds
});
