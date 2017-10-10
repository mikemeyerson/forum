import React from 'react';
import { connect } from 'react-redux';
import { getPostById } from '../../reducers';

const PostDetails = ({ post }) => (
	<div>
		<p>ID: {post.id}</p>
		<p>Title: {post.title}</p>
		<p>Author: {post.author}</p>
		<hr/>
		<p>{post.body}</p>
	</div>
);

const mapStateToProps = (state, ownProps) => ({
	post: getPostById(state, ownProps.match.params.id)
});

export default connect(
	mapStateToProps,
	null
)(PostDetails);
