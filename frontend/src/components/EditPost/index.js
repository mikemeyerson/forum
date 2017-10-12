import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editPost, fetchPosts } from '../../actions/posts';
import { getPostById } from '../../reducers';
import Form from '../Form';

class EditPost extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	submitForm = (modifiedPost) => {
		const { editPost, history, post } = this.props;

		editPost({
			...modifiedPost,
			id: post.id
		});
		history.push('/');
	};

	render() {
		const { post } = this.props;
		const disabledFields = [
			'author'
		];

		return (
			<Form
				post={post}
				onSubmit={this.submitForm}
				disabledFields={disabledFields}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	post: getPostById(state, ownProps.match.params.id)
});

export default connect(
	mapStateToProps,
	{
		editPost,
		fetchPosts
	}
)(EditPost);
