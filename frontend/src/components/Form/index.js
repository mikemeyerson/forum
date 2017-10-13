import React, { Component } from 'react';
import { isEmpty, includes, some, difference } from 'lodash';
import CategoryList from '../CategoryList';

class Form extends Component {
	state = {
		title: '',
		author: '',
		body: '',
		category: '',
		pristine: true
	};

	// TODO: Is this an anti-pattern? How do we pre-populate fields
	componentWillReceiveProps(nextProps) {
		const post = nextProps.post || {};

		if (this.state.pristine && !isEmpty(post.title)) {
			this.setState({
				title: post.title,
				author: post.author,
				body: post.body,
				category: post.category,
				pristine: false
			});
		}
	}

	setValue = (value) => ({ target }) => {
		this.setState({
			[value]: target.value,
			pristine: false
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const { onSubmit, disabledFields } = this.props;
		const { title, author, body, category } = this.state;
		const post = {
			title,
			author,
			body,
			category
		};
		const fieldsToValidate = difference(Object.keys(post), disabledFields);

		if (some(fieldsToValidate, (field) => isEmpty(this.state[field]))) {
			return;
		}

		onSubmit(post);
	};

	renderCategories = (categories) => (
		<select value={this.state.category} onChange={this.setValue('category')}>
			<option disabled value="">Choose one...</option>
			{categories.map((cat) => (
				<option key={cat.path} value={cat.path}>
					{cat.name}
				</option>
			))}
		</select>
	);

	render() {
		const { disabledFields } = this.props;
		const numBodyRows = 8;
		const numBodyCols = 70;

		return (
			<form>
				{!includes(disabledFields, 'title') && (
					<input
						type="text"
						placeholder="Title"
						onChange={this.setValue('title')}
						value={this.state.title}
					/>
				)}
				{!includes(disabledFields, 'author') && (
					<input
						type="text"
						placeholder="Author"
						onChange={this.setValue('author')}
						value={this.state.author}
					/>
				)}
				{!includes(disabledFields, 'body') && (
					<textarea
						rows={numBodyRows}
						cols={numBodyCols}
						placeholder="Write message here..."
						onChange={this.setValue('body')}
						value={this.state.body}
					/>
				)}
				{!includes(disabledFields, 'category') && (
					<CategoryList
						render={this.renderCategories}
						active={this.state.category}
					/>
				)}
				<button type="submit" onClick={this.handleSubmit}>
					Submit
				</button>
			</form>
		);
	}
}

export default Form;
