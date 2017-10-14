import React from 'react';
import { Grid, Row, Col, Jumbotron, ProgressBar } from 'react-bootstrap';

const Loader = () => (
	<Grid>
		<Row>
			<Col lg={9}>
				<Jumbotron>
					<h1>Hold on...</h1>
					<p>Serving up some fresh content any second now!</p>
					<ProgressBar
						striped
						active
						now={100}
						label="Loading..."
					/>
				</Jumbotron>
			</Col>
		</Row>
	</Grid>
);

export default Loader;
