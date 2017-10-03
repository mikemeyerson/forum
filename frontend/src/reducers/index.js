import {
	ADD_POST,
	EDIT_POST,
	DELETE_POST
} from '../actions';

/*
{
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
}
*/


function posts(state = {}, action) {
	switch (action.type) {
		case ADD_POST:
		case EDIT_POST:
		case DELETE_POST:
		default:
			return state;
	}
}

export default posts;
