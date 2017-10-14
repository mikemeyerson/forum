import React from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddPostButton from '../AddPostButton';

const NoPostsFound = () => (
	<Grid>
		<Row>
			<Col lg={9}>
				<Jumbotron>
					<h1>Oops!</h1>
					<p>There's nothing here yet. <Link to="/add">Start the conversation.</Link></p>
					<AddPostButton />
				</Jumbotron>
			</Col>
		</Row>
	</Grid>
);

export default NoPostsFound;
