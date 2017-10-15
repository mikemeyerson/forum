import React, { Component } from 'react';
import { isEmpty, includes, some, difference } from 'lodash';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import CategoryDropdown from './CategoryDropdown';

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

		if (this.state.pristine && !isEmpty(post.body)) {
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

	isFormInvalid = () => {
		const { disabledFields } = this.props;
		const { title, author, body, category } = this.state;
		const post = {
			title,
			author,
			body,
			category
		};

		const fieldsToValidate = difference(Object.keys(post), disabledFields);

		return some(fieldsToValidate, (field) => isEmpty(this.state[field]));
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const { onSubmit } = this.props;
		const { title, author, body, category } = this.state;
		const post = {
			title,
			author,
			body,
			category
		};

		onSubmit(post);
	};

	render() {
		const { disabledFields } = this.props;
		const numBodyRows = 8;
		const numBodyCols = 70;

		return (
			<form>
					{!includes(disabledFields, 'title') && (
						<FormGroup controlId="title">
							<ControlLabel>Title</ControlLabel>
							<FormControl
								type="text"
								value={this.state.title}
								onChange={this.setValue('title')}
							/>
						</FormGroup>
					)}
					{!includes(disabledFields, 'author') && (
						<FormGroup controlId="author">
							<ControlLabel>Author</ControlLabel>
							<FormControl
								type="text"
								value={this.state.author}
								onChange={this.setValue('author')}
							/>
						</FormGroup>
					)}
					{!includes(disabledFields, 'body') && (
						<FormGroup controlId="body">
							<ControlLabel>Message</ControlLabel>
							<FormControl
								componentClass="textarea"
								rows={numBodyRows}
								cols={numBodyCols}
								onChange={this.setValue('body')}
								value={this.state.body}
							/>
						</FormGroup>
					)}
					{!includes(disabledFields, 'category') && (
						<CategoryDropdown
							handleChange={this.setValue('category')}
							active={this.state.category}
						/>
					)}
					<Button
						type="submit"
						bsStyle="primary"
						bsSize="large"
						onClick={this.handleSubmit}
						disabled={this.isFormInvalid()}
					>
						Submit
					</Button>
			</form>
		);
	}
}

export default Form;
