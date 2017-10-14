import {
	FETCH_COMMENTS_BY_POST_SUCCESS,
	FETCH_COMMENT_BY_ID_SUCCESS,
	ADD_COMMENT_SUCCESS,
	EDIT_COMMENT_SUCCESS,
	INCREMENT_COMMENT_SCORE_SUCCESS,
	DECREMENT_COMMENT_SCORE_SUCCESS,
	DELETE_COMMENT_SUCCESS
} from '../actions/comments';

const byId = (state = {}, action) => {
	switch (action.type) {
		case FETCH_COMMENTS_BY_POST_SUCCESS:
		case FETCH_COMMENT_BY_ID_SUCCESS:
		case ADD_COMMENT_SUCCESS:
		case EDIT_COMMENT_SUCCESS:
		case INCREMENT_COMMENT_SCORE_SUCCESS:
		case DECREMENT_COMMENT_SCORE_SUCCESS:
		case DELETE_COMMENT_SUCCESS:
			return {
				...state,
				...action.response.entities.comments
			};
		default:
			return state;
	}
};

// Selectors
export const getComments = (state, postId) => {
	return Object.keys(state)
		.filter((id) => !state[id].deleted && state[id].parentId === postId)
		.map((id) => state[id]);
};

export const getCommentById = (state, id) => {
	const comment = state[id] || {};

	return !comment.deleted && comment;
};

export default byId;
