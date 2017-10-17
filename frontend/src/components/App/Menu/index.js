import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { getVisibleCategories } from '../../../reducers';
import { fetchCategories } from '../../../actions/categories';

class Menu extends Component {
	componentDidMount() {
		this.props.fetchCategories();
	}

	render() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">Forum</Link>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					{this.props.categories.map((cat, idx) => (
						<LinkContainer key={cat.path} to={`/${cat.path}`}>
							<NavItem eventKey={idx}>
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
