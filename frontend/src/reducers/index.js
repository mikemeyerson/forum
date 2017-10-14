import { combineReducers } from 'redux';
import sortMethods from '../sort-methods';
import categoriesReducer from './categories';
import { getCategories } from './categories';
import postsReducer from './posts';
import * as postSelectors from './posts';
import commentsReducer from './comments';
import * as commentSelectors from './comments';
import sortReducer from './sort';


export const getCommentById = (state, commentId) => {
	return commentSelectors.getCommentById(state.comments, commentId);
};

export const getVisibleComments = (state, postId) => {
	return commentSelectors
		.getComments(state.comments, postId)
		.sort(sortMethods[state.sort]);
};

export const getPostById = (state, id) => {
	return postSelectors.getPostById(state.posts, id);
};

export const getVisiblePosts = (state, category) => {
	return postSelectors
		.getPosts(state.posts, category)
		.sort(sortMethods[state.sort]);
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
	categories: categoriesReducer,
	sort: sortReducer
});
