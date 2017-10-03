import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: []
		}
	}

	componentDidMount() {
		const url = 'http://localhost:3001/categories';
		console.log('fetching from url', url);
		fetch(url, { headers: { 'Authorization': 'whatever-you-want' }})
			.then((res) => res.json())
			.then(({ categories }) => {
				this.setState({ categories });
			});
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<p>
					Talking to the backend yields these categories: <br/>
					{JSON.stringify(this.state.categories)}
				</p>
			</div>
		);
	}
}

export default App;
