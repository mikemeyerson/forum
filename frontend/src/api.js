const SERVER_URL = 'http://localhost:3001';

const makeGetRequest = (path) =>
	fetch(`${SERVER_URL}/${path}`, { headers: { Authorization: 'whatever-you-want' }})
		.then((res) => res.json())
		.then((json) => {
			console.log('GET RESPONSE', json);
			return json;
		});

const makePostRequest = (path, body) =>
	fetch(`${SERVER_URL}/${path}`, {
		headers: {
			Authorization: 'whatever-you-want',
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(body)
	})
	.then((res) => res.json())
	.then((json) => {
		console.log('POST REQUEST', body);
		console.log('POST RESPONSE', json);
		return json;
	});

const makePutRequest = (path, body) =>
	fetch(`${SERVER_URL}/${path}`, {
		headers: {
			'Authorization': 'whatever-you-want',
			'Content-Type': 'application/json'
		},
		method: 'PUT',
		body: JSON.stringify(body)
	})
	.then((res) => res.json())
	.then((json) => {
		console.log('PUT REQUEST', body);
		console.log('PUT RESPONSE', json);
		return json;
	});

const makeDeleteRequest = (path) =>
	fetch(`${SERVER_URL}/${path}`, {
		headers: { Authorization: 'whatever-you-want' },
		method: 'DELETE'
	})
	.then((res) => res.json())
	.then((json) => {
		console.log('DELETE RESPONSE', json);
		return json;
	});

// TODO: Use fetchPostById for EditPost and PostDetails

export const fetchCategories = () => makeGetRequest('categories');

// Posts API

export const fetchPosts = () => makeGetRequest('posts');

export const fetchPostById = (postId) => makeGetRequest(`posts/${postId}`);

export const fetchPostsByCategory = (category) => makeGetRequest(`${category}/posts`);

export const addPost = (post) => makePostRequest('posts', post);

export const editPost = (post) => makePutRequest(`posts/${post.id}`, post);

export const incrementPostScore = (id) =>
	makePostRequest(`posts/${id}`, { option: 'upVote' });

export const decrementPostScore = (id) =>
	makePostRequest(`posts/${id}`, { option: 'downVote' });

export const deletePost = (id) => makeDeleteRequest(`posts/${id}`);

// Comments API

export const fetchCommentsByPostId = (postId) => makeGetRequest(`posts/${postId}/comments`);

export const fetchCommentById = (commentId) => makeGetRequest(`comments/${commentId}`);

export const addComment = (comment) => makePostRequest(`comments`, comment);

export const editComment = (comment) => makePutRequest(`comments/${comment.id}`, comment);

export const incrementCommentScore = (commentId) =>
	makePostRequest(`comments/${commentId}`, { option: 'upVote' });

export const decrementCommentScore = (commentId) =>
	makePostRequest(`comments/${commentId}`, { option: 'downVote' });

export const deleteComment = (commentId) => makeDeleteRequest(`comments/${commentId}`);
