import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AddPostButton from '../AddPostButton';
import Post from '../../../shared/Post';
import SortBy from '../../../shared/SortBy';

const PostList = ({ posts }) => (
	<Grid>
		<Row style={{paddingBottom: "2rem"}}>
			<Col lg={5}>
				<AddPostButton />
			</Col>
			<Col lg={5} className="text-right">
				<SortBy />
			</Col>
		</Row>
		{posts.map((post) => (
			<Row key={post.id}>
				<Col lg={10}>
					<Post post={post} />
				</Col>
			</Row>
		))}
	</Grid>
);

export default PostList;
