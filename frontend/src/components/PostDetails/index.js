import React from 'react';

const PostDetails = ({ match }) => (
	<div>Hello {match.params.id}</div>
);

export default PostDetails;
