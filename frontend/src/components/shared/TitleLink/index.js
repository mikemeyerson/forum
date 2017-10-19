import React from 'react';
import { Link } from 'react-router-dom';

const TitleLink = ({ url, text }) => {
	if (url) {
		return (
			<Link to={url}>
				<h4 style={{marginLeft: "15px", color: "white"}}>
					{text}
				</h4>
			</Link>
		);
	}

	return (
		<h4 style={{marginLeft: "15px"}}>{text}</h4>
	);
};

export default TitleLink;
