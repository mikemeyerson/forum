import * as api from '../api';
import {
	FETCH_CATEGORIES_REQUEST,
	FETCH_CATEGORIES_SUCCESS
} from './types';

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
