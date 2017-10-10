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

		return (
			<div>
				<NavLink to="/all" activeStyle={activeStyle}>
					All
				</NavLink>{" "}
				{categories.map((cat) => (
					<NavLink to={cat.path}>
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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CategoryList);
