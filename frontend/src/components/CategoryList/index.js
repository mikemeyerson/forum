import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { capitalize } from 'lodash';
import {
	getCategories
} from '../../reducers';
import * as actions from '../../actions/categories';

const capitalizeEach = (cat) => ({
	...cat,
	name: cat.name
		.split(' ')
		.map(capitalize)
		.join(' ')
});

class CategoryList extends Component {
	componentDidMount() {
		this.props.fetchCategories();
	}

	// TODO: Make visibleCategories a selector
	render() {
		const { categories, showAll } = this.props;
		const all = {
			name: 'All',
			path: 'all'
		};
		let visibleCategories = showAll ? [all, ...categories] : categories;
		visibleCategories = visibleCategories.map(capitalizeEach);

		return (
			<div>
				{this.props.render(visibleCategories)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	categories: getCategories(state)
});

const mapDispatchToProps = {
	fetchCategories: actions.fetchCategories
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(CategoryList));
