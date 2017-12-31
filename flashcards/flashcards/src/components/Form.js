import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import helpers from '../utils/helpers';


class Form extends React.Component {
	constructor(props) {

		super(props);

		this.state = {
			term: "", 
			location: "", 
			limit: 5,
			results: [], 
			trenResults: []
		};
	}

	handleChange = (event) => {
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

	handleSubmit = (event) => {
		event.preventDefault();
		console.log("STARTING HELPER");
		// search query
		helpers.runQuery(this.state.term, this.state.location, this.state.limit)
		.then(data => {
			this.setState({results: data});
		}).then(data => {
			console.log("SEARCH RESULTS")
			console.log(this.state.results)
		})

		// trending query
		helpers.runTrending(this.state.location)
		.then(data1 => {
			this.setState({trenResults: data1});
		}).then(data1 => {
			console.log("TRENDING RESULTS")
			console.log(this.state.trenResults)
		})

	}


	render(){
		return (
			<div>
			  <Jumbotron className="form">
			    <h1 id="logo">Form</h1>


			    <form onSubmit={this.handleSubmit}>
			    	<p> What's your name? </p>
			    	<input 
			    		type="text"
			    		id="term"
			    		className="form-control"
			    		value={this.state.term}
			    		onChange={this.handleChange}
			    		placeholder="foodBomb"
			    		required
			    	/>
			{/*}  //   <br /><br />
			  //   <p> In </p>
			  //   	<input 
			  //   		type="text"
			  //   		id="location"
			  //   		className="form-control"
			  //   		value={this.state.location}
			  //   		onChange={this.handleChange}
			  //   		placeholder="New York, NY"
			  //   		required	
			  //   	/>
			  // <br /><br />
			  // <p>  Results </p>
			  //   	<input 
			  //   		type="number"
			  //   		id="limit"
			  //   		value={this.state.limit}
			  //   		className="form-control"
			  //   		onChange={this.handleChange}
			  //   		min="1"
			  //   		max="20"
			  //   		required
			  //   	/>
			  // <br /><br /> */}
			    	<input 
			    		type="submit"
			    		value="Submit"
			    		className="btn btn-lg"
			    	/>
			    </form>
			  </Jumbotron>
			  	
		   </div>
  		);
		   
	}
}



export default Form
