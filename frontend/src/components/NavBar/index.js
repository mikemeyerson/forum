import React from 'react';
import { NavLink } from 'react-router-dom';
import CategoryList from '../CategoryList';
import './NavBar.css';

const activeStyle = {
	textDecoration: 'none',
	color: 'black',
	cursor: 'text'
};

const renderCategories = (categories) =>
	categories.map((cat) => (
		<NavLink
			key={cat.path}
			to={`/${cat.path}`}
			activeStyle={activeStyle}
		>
			{cat.name}{" "}
		</NavLink>
	));

const NavBar = () => (
	<nav className="links">
		<NavLink to="/add" activeStyle={activeStyle}>
			Add Post
		</NavLink>
		<CategoryList showAll={true} render={renderCategories}/>
	</nav>
);

export default NavBar;
