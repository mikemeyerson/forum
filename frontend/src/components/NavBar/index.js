import React from 'react';
import { NavLink } from 'react-router-dom';
import CategoryList from '../CategoryList';
import './NavBar.css';

const activeStyle = {
	textDecoration: 'none',
	color: 'black',
	cursor: 'text'
};

const NavBar = () => (
	<nav className="links">
		<NavLink to="/add" activeStyle={activeStyle}>
			Add Post
		</NavLink>
		<CategoryList activeStyle={activeStyle} />
	</nav>
);

export default NavBar;
