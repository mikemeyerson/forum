import React from 'react';
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Counter from '../Counter';
import TitleLink from '../TitleLink';

const MessageHeader = ({ msg, titleUrl, editUrl, replyUrl, handleDelete }) => {
	const onDeleteClick = () => {
		handleDelete(msg.id);
	};

	return (
		<Row>
			<Col lg={6}>
				<div style={{display: "flex"}}>
					<Counter msg={msg} />
					<TitleLink
						url={titleUrl}
						text={msg.title || `${msg.author} said...`}
					/>
				</div>
			</Col>
			<Col lg={6} className="text-right">
				<ButtonGroup>
					{editUrl && (
						<LinkContainer to={editUrl}>
							<Button>Edit</Button>
						</LinkContainer>
					)}
					<Button onClick={onDeleteClick}>
						Delete
					</Button>
					{replyUrl && (
						<LinkContainer to={replyUrl}>
							<Button>Reply</Button>
						</LinkContainer>
					)}
				</ButtonGroup>
			</Col>
		</Row>
	);
};

export default MessageHeader;
