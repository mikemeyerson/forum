import * as api from '../api';

export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';

export const fetchCategories = () => (dispatch) => {
	dispatch({
		type: FETCH_CATEGORIES_REQUEST
	});

	return api.fetchCategories().then((response) => {
		dispatch({
			type: FETCH_CATEGORIES_SUCCESS,
			response: response.categories
		});
	});
};
