import React from 'react';
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Counter from '../../../shared/Counter';

const PostHeader = ({ post, url, handlePostDelete }) => (
	<Row>
		<Col lg={6}>
			<div style={{display: "flex"}}>
				<Counter msg={post} />
				<h4 style={{"margin-left": "15px"}}>
					{post.title}
				</h4>
			</div>
		</Col>
		<Col lg={6} className="text-right">
			<ButtonGroup>
				<LinkContainer to={`${url}/edit`}>
					<Button>Edit</Button>
				</LinkContainer>
				<Button onClick={handlePostDelete}>
					Delete
				</Button>
				<LinkContainer to={`${url}/reply`}>
					<Button>Reply</Button>
				</LinkContainer>
			</ButtonGroup>
		</Col>
	</Row>
);

export default PostHeader;
