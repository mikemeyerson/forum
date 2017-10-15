import React from 'react';
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Counter from '../../../shared/Counter';

const MessageHeader = ({ msg, url, handleDelete }) => {
	const isPost = ('parentId' in msg) === false;
	const editUrl = isPost ? '' : `/${msg.id}`;
	const onDeleteClick = () => {
		console.info('yup');
		handleDelete(msg.id);
	};

	return (
		<Row>
			<Col lg={6}>
				<div style={{display: "flex"}}>
					<Counter msg={msg} />
					<h4 style={{marginLeft: "15px"}}>
						{isPost ? msg.title : `${msg.author} said...`}
					</h4>
				</div>
			</Col>
			<Col lg={6} className="text-right">
				<ButtonGroup>
					<LinkContainer to={`${url}${editUrl}/edit`}>
						<Button>Edit</Button>
					</LinkContainer>
					<Button onClick={onDeleteClick}>
						Delete
					</Button>
					{isPost && (
						<LinkContainer to={`${url}/reply`}>
							<Button>Reply</Button>
						</LinkContainer>
					)}
				</ButtonGroup>
			</Col>
		</Row>
	);
};

export default MessageHeader;
