import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Form extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
			contact: '',
			address: '',
			categories: '',
			number_of_people: '',
			dropdownValue: 'Category'
    }
		this.handleInputChange = this.handleInputChange.bind(this);
    this.createPosting = this.createPosting.bind(this);
    this.setPosting = this.setPosting.bind(this);
	}

	handleInputChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;

		this.setState({
			[name]: value
		});
	}

	createPosting(name,	contact,	address,	categories,	number_of_people) {
			var self = this
			axios.post('http://localhost:3000/create', {
				name: name,
				contact: contact, 
				address: address,
				categories: categories,
				number_of_people: number_of_people
			})
		.then(function(response) {
      console.log("did u even succeed");
      console.log(response);
			document.getElementById("posting-form").reset();
			self.setState({dropdownValue: 'categories'});
			})
		.catch(function(error) {
      console.log("this is an error");
			console.log(error);
		})
	}

	setPosting() {
		this.createPosting(this.state.name, this.state.contact, this.state.address, this.state.categories, this.state.number_of_people)
	}

  render() {
    return (
      <form id="posting-form">
      	<label>How can you help?</label>
      	<label>
      			<input
      				placeholder="Name:"
      				name="name"
      				type="string"
      				onChange={this.handleInputChange}
      			/>
      	</label>
      	<br />
      	<label>
      			<input
      				placeholder="Contact Info (Phone number or email):"
      				name="contact"
      				type="string"
      				onChange={this.handleInputChange}
      			/>
      	</label>
      	<br />
      	<label>
      			<input
      				placeholder="Address:"
      				name="address"
      				type="string"
      				onChange={this.handleInputChange}
      			/>
      	</label>
      	<br />
      	<label>
      		<label> What you can provide: </label>
    			<select 
    				name="dropdownValue"
    				value={this.state.value}
    				onChange={this.handleInputChange}>
    				<option value="water">Water</option>
    				<option value="food">Food</option>
    				<option value="shower">Shower</option>
    				<option value="bed">Bed</option>
  				</select>
      	</label>
      	<br />
      	<label>
      			<input
      				placeholder="Number of people you can provide for:"
      				name="number_of_people"
      				type="string"
      				onChange={this.handleInputChange}
      			/>
      	</label>
      	<input type="submit" value="Save Lives" onSubmit={this.setPosting}/>
      </form>
    );
  }
}

export default Form;
