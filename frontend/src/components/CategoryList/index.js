import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getVisibleCategories } from '../../reducers';
import * as actions from '../../actions/categories';

class CategoryList extends Component {
	componentDidMount() {
		this.props.fetchCategories();
	}

	render() {
		const { categories, showAll } = this.props;
		const all = {
			name: 'All',
			path: 'all'
		};
		const visibleCategories = showAll ? [all, ...categories] : categories;

		return (
			<div>
				{this.props.render(visibleCategories)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	categories: getVisibleCategories(state)
});

const mapDispatchToProps = {
	fetchCategories: actions.fetchCategories
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(CategoryList));
