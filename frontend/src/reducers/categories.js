import {
	FETCH_CATEGORIES_SUCCESS
} from '../actions/categories';

const categories = (state = [], action) => {
	switch (action.type) {
		case FETCH_CATEGORIES_SUCCESS:
		 return action.response;
		default:
			return state;
	}
};

export const getCategories = (state) => {
	return state;
};

export default categories;
