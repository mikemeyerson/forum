import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { v4 } from 'uuid';
import * as moment from 'moment';
import { addPost } from '../../actions/posts';



class AddPost extends Component {
	// TODO: Add category, remove hard-coding
	state = {
		title: '',
		author: '',
		body: ''
	};

	handleTitle = (event) => {
		this.setState({
			title: event.target.value
		});
	};

	handleAuthor = (event) => {
		this.setState({
			author: event.target.value
		});
	};

	handleBody = (event) => {
		this.setState({
			body: event.target.value
		});
	};

	submitForm = (event) => {
		const { addPost, history } = this.props;
		const { title, author, body } = this.state;
		const newPost = {
			title,
			author,
			body,
			id: v4(),
			timestamp: moment(),
			category: 'udacity'
		};

		event.preventDefault();

		addPost(newPost);
		history.push('/');
	};

	render() {
		return (
			<form>
				<input
					type="text"
					placeholder="Title"
					onChange={this.handleTitle}
					value={this.state.title}
				/>
				<input
					type="text"
					placeholder="Author"
					onChange={this.handleAuthor}
					value={this.state.author}
				/>
				<input
					type="text"
					placeholder="Write message here..."
					onChange={this.handleBody}
					value={this.state.body}
				/>
				<button
					type="submit"
					onClick={this.submitForm}
				>
					Add Post
				</button>
			</form>
		);
	}
}

const mapStateToProps = (state, { history }) => ({
	history
});

export default withRouter(connect(
	mapStateToProps,
	{ addPost }
)(AddPost));
