import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getVisibleCategories } from '../../../reducers';
import { fetchCategories } from '../../../actions/categories';
import './NavBar.css';

class NavBar extends Component {
	componentDidMount() {
		this.props.fetchCategories();
	}

	render() {
		const all = {
			name: 'All',
			path: 'all'
		};
		const activeStyle = {
			textDecoration: 'none',
			color: 'black',
			cursor: 'text'
		};
		const visibleCategories = [all, ...this.props.categories];

		return (
			<nav className="links">
				{visibleCategories.map((cat) => (
					<NavLink key={cat.path} to={`/${cat.path}`} activeStyle={activeStyle}>
						{cat.name}{" "}
					</NavLink>
					))}
			</nav>
		);
	}
}

const mapStateToProps = (state) => ({
	categories: getVisibleCategories(state)
});

const mapDispatchToProps = {
	fetchCategories
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NavBar);
