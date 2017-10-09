export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export function loadCategories({ categories }) {
	return {
		type: LOAD_CATEGORIES,
		categories
	};
}
