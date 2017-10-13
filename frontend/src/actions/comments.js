import * as api from '../api';
import * as schema from '../schema';
import { normalize } from 'normalizr';

export const FETCH_COMMENTS_BY_POST_REQUEST = 'FETCH_COMMENTS_BY_POST_REQUEST';
export const FETCH_COMMENTS_BY_POST_SUCCESS = 'FETCH_COMMENTS_BY_POST_SUCCESS';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';

export const fetchCommentsByPostId = (parentId) => (dispatch) => {
	dispatch({
		type: FETCH_COMMENTS_BY_POST_REQUEST
	});

	return api.fetchCommentsByPostId(parentId).then((response) => {
		dispatch({
			type: FETCH_COMMENTS_BY_POST_SUCCESS,
			response: normalize(response, schema.arrayOfComments)
		});
	});
};

export const addComment = (comment) => (dispatch) => {
	dispatch({
		type: ADD_COMMENT_REQUEST
	});

	return api.addComment(comment).then((response) => {
		dispatch({
			type: ADD_COMMENT_SUCCESS,
			response: normalize(response, schema.comment)
		});
	})
};
