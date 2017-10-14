import * as api from '../api';
import * as schema from '../schema';
import { normalize } from 'normalizr';
import { getIsFetching } from '../reducers';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';

export const INCREMENT_POST_SCORE_REQUEST = 'INCREMENT_POST_SCORE_REQUEST';
export const INCREMENT_POST_SCORE_SUCCESS = 'INCREMENT_POST_SCORE_SUCCESS';

export const DECREMENT_POST_SCORE_REQUEST = 'DECREMENT_POST_SCORE_REQUEST';
export const DECREMENT_POST_SCORE_SUCCESS = 'DECREMENT_POST_SCORE_SUCCESS';

export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';

export const EDIT_POST_REQUEST = 'EDIT_POST_REQUEST';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';


export const fetchPosts = () => (dispatch, getState) => {
	if (getIsFetching(getState())) {
		return Promise.resolve();
	}

	dispatch({
		type: FETCH_POSTS_REQUEST
	});

	return api.fetchPosts().then((response) => {
		dispatch({
			type: FETCH_POSTS_SUCCESS,
			response: normalize(response, schema.arrayOfPosts)
		});
	});
};

// TODO: Prevent double posting
export const addPost = (post) => (dispatch) => {
	dispatch({
		type: ADD_POST_REQUEST
	});

	return api.addPost(post).then((response) => {
		dispatch({
			type: ADD_POST_SUCCESS,
			response: normalize(response, schema.post)
		});
	});
};

export const editPost = (post) => (dispatch) => {
	dispatch({
		type: EDIT_POST_REQUEST
	});

	return api.editPost(post).then((response) => {
		dispatch({
			type: EDIT_POST_SUCCESS,
			response: normalize(response, schema.post)
		});
	});
};

export const incrementPostScore = (id) => (dispatch) => {
	dispatch({
		type: INCREMENT_POST_SCORE_REQUEST
	});

	return api.incrementPostScore(id).then((response) => {
		dispatch({
			type: INCREMENT_POST_SCORE_SUCCESS,
			response: normalize(response, schema.post)
		});
	});
};

export const decrementPostScore = (id) => (dispatch) => {
	dispatch({
		type: DECREMENT_POST_SCORE_REQUEST
	});

	return api.decrementPostScore(id).then((response) => {
		dispatch({
			type: DECREMENT_POST_SCORE_SUCCESS,
			response: normalize(response, schema.post)
		});
	});
};

export const deletePost = (id) => (dispatch) => {
	dispatch({
		type: DELETE_POST_REQUEST
	});

	return api.deletePost(id).then((response) => {
		dispatch({
			type: DELETE_POST_SUCCESS,
			response: normalize(response, schema.post)
		});
	});
};
