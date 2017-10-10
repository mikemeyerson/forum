import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { capitalize } from 'lodash';
import {
	getCategories
} from '../../reducers';
import * as actions from '../../actions/categories';

const capitalizeEach = (str) =>
	str.split(' ')
		.map(capitalize)
		.join(' ');


class CategoryList extends Component {
	componentDidMount() {
		this.props.fetchCategories();
	}

	render() {
		const { categories, activeStyle } = this.props;
		const showAll = {
			name: 'All',
			path: 'all'
		};
		const categoriesToRender = [showAll, ...categories];

		return (
			<div>
				{categoriesToRender.map((cat) => (
					<NavLink
						to={`/${cat.path}`}
						activeStyle={activeStyle}
					>
						{capitalizeEach(cat.name)}{" "}
					</NavLink>
				))}
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
