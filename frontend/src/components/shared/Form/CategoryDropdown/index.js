import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getVisibleCategories } from '../../../../reducers';
import * as actions from '../../../../actions/categories';

class CategoryDropdown extends Component {
	componentDidMount() {
		this.props.fetchCategories();
	}

	render() {
		const { active, categories, handleChange } = this.props;

		return (
			<select value={active} onChange={handleChange}>
				<option disabled value="">Choose one...</option>
				{categories.map((cat) => (
					<option key={cat.path} value={cat.path}>
						{cat.name}
					</option>
				))}
			</select>
		);
	}
}

const mapStateToProps = (state) => ({
	categories: getVisibleCategories(state)
});

const mapDispatchToProps = {
	fetchCategories: actions.fetchCategories
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(CategoryDropdown));
