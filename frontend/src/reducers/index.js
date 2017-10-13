import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import { getCategories } from './categories';
import postsReducer from './posts';
import * as postSelectors from './posts';
import commentsReducer from './comments';
import { getComments } from './comments';

// TODO: Remove this once we fetch individual post
export const getPostById = (state, id) => {
	return postSelectors.getPostById(state.posts, id);
};

export const getVisibleComments = (state, postId) => {
	return getComments(state.comments, postId);
};

export const getVisiblePosts = (state, category) => {
	return postSelectors.getPosts(state.posts, category);
};

export const getIsFetching = (state) => {
	return postSelectors.getIsFetching(state.posts);
};

export const getVisibleCategories = (state) => {
	return getCategories(state.categories);
};

export default combineReducers({
	comments: commentsReducer,
	posts: postsReducer,
	categories: categoriesReducer
});
