import { combineReducers } from 'redux';
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

/*{
	"categories": [{
		"name": "react",
		"path": "react"
	}, {
		"name": "redux",
		"path": "redux"
	}, {
		"name": "udacity",
		"path": "udacity"
	}]
}*/


export const getVisiblePosts = (state) => {
	return postSelectors.getVisiblePosts(state.posts);
};

export const getIsFetching = (state) => {
	return postSelectors.getIsFetching(state.posts);
};

export default combineReducers({
	/*comments,*/
	posts: postsReducer,
	/*categories*/
});
