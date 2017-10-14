import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { getVisibleCategories } from '../../../reducers';
import { fetchCategories } from '../../../actions/categories';
import './Menu.css';

class Menu extends Component {
	componentDidMount() {
		this.props.fetchCategories();
	}

	render() {
		const all = {
			name: 'All',
			path: 'all'
		};

		const visibleCategories = [all, ...this.props.categories];

		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						Forum
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					{visibleCategories.map((cat) => (
						<LinkContainer key={cat.path} to={`/${cat.path}`}>
							<NavItem>
								{cat.name}
							</NavItem>
						</LinkContainer>
					))}
				</Nav>
			</Navbar>
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
)(Menu);
