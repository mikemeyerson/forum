import * as api from '../api';
import * as schema from '../schema';
import { normalize } from 'normalizr';
import {
	FETCH_COMMENTS_BY_POST_REQUEST,
	FETCH_COMMENTS_BY_POST_SUCCESS,
	FETCH_COMMENT_BY_ID_REQUEST,
	FETCH_COMMENT_BY_ID_SUCCESS,
	ADD_COMMENT_REQUEST,
	ADD_COMMENT_SUCCESS,
	EDIT_COMMENT_REQUEST,
	EDIT_COMMENT_SUCCESS,
	INCREMENT_COMMENT_SCORE_REQUEST,
	INCREMENT_COMMENT_SCORE_SUCCESS,
	DECREMENT_COMMENT_SCORE_REQUEST,
	DECREMENT_COMMENT_SCORE_SUCCESS,
	DELETE_COMMENT_REQUEST,
	DELETE_COMMENT_SUCCESS
} from './types';

export const fetchCommentsByPostId = (postId) => (dispatch) => {
	dispatch({
		type: FETCH_COMMENTS_BY_POST_REQUEST
	});

	return api.fetchCommentsByPostId(postId).then((response) => {
		dispatch({
			type: FETCH_COMMENTS_BY_POST_SUCCESS,
			response: normalize(response, schema.arrayOfComments)
		});
	});
};

export const fetchCommentById = (commentId) => (dispatch) => {
	dispatch({
		type: FETCH_COMMENT_BY_ID_REQUEST
	});

	return api.fetchCommentById(commentId).then((response) => {
		dispatch({
			type: FETCH_COMMENT_BY_ID_SUCCESS,
			response: normalize(response, schema.comment)
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

export const editComment = (comment) => (dispatch) => {
	dispatch({
		type: EDIT_COMMENT_REQUEST
	});

	return api.editComment(comment).then((response) => {
		dispatch({
			type: EDIT_COMMENT_SUCCESS,
			response: normalize(response, schema.comment)
		});
	});
};

export const incrementCommentScore = (commentId) => (dispatch) => {
	dispatch({
		type: INCREMENT_COMMENT_SCORE_REQUEST
	});

	return api.incrementCommentScore(commentId).then((response) => {
		dispatch({
			type: INCREMENT_COMMENT_SCORE_SUCCESS,
			response: normalize(response, schema.comment)
		});
	});
};

export const decrementCommentScore = (commentId) => (dispatch) => {
	dispatch({
		type: DECREMENT_COMMENT_SCORE_REQUEST
	});

	return api.decrementCommentScore(commentId).then((response) => {
		dispatch({
			type: DECREMENT_COMMENT_SCORE_SUCCESS,
			response: normalize(response, schema.comment)
		});
	});
};

export const deleteComment = (commentId) => (dispatch) => {
	dispatch({
		type: DELETE_COMMENT_REQUEST
	});

	return api.deleteComment(commentId).then((response) => {
		dispatch({
			type: DELETE_COMMENT_SUCCESS,
			response: normalize(response, schema.comment)
		});
	});
};
