import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import * as categorySelectors from './categories';
import postsReducer from './posts';
import * as postSelectors from './posts';

// const exampleState = {
// 	categories: {
// 		name1: {
// 			path: "thing",
// 			posts: ["pid1"]
// 		}
// 	},
// 	posts: {
// 		byId: {
// 			pid1: {
// 				timestamp: "",
// 				title: "",
// 				body: "",
// 				author: "",
// 				category: "name1",
// 				voteScore: 1,
// 				deleted: false,
// 				comments: ["cid1"]
// 			}
// 		},
// 		allIds: ['pid1']
// 	},
// 	comments: {
// 		cid1: {
// 			parentId: "pid1",
// 			timestamp: "",
// 			body: "",
// 			author: "",
// 			voteScore: 1,
// 			deleted: false,
// 			parentDeleted: false
// 		}
// 	}
// };

export const getPostById = (state, id) => {
	return postSelectors.getPostById(state.posts, id);
};

export const getVisiblePosts = (state, category) => {
	return postSelectors.getVisiblePosts(state.posts, category);
};

export const getIsFetching = (state) => {
	return postSelectors.getIsFetching(state.posts);
};

export const getCategories = (state) => {
	return categorySelectors.getCategories(state.categories);
};

export default combineReducers({
	/*comments,*/
	posts: postsReducer,
	categories: categoriesReducer
});
