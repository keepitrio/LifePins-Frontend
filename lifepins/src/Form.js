import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			contact: '',
			address: '',
			categories: '',
			number_of_people: ''
		}

		this.handleInputChange = this.handleInputChange.bind(this);
    this.createPosting = this.createPosting.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
	}

	handleInputChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;

		this.setState({
			[name]: value
		});
  }

  createPosting(name, contact,  address,  categories, number_of_people) {
      axios.post('http://localhost:3001/create', {
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
			})
		.catch(function(error) {
      console.log("this is an error");
			console.log(error);
		})
	}

  handleSubmit(event) {
    event.preventDefault();
    this.createPosting(this.state.name, this.state.contact, this.state.address, this.state.categories, this.state.number_of_people)
  }

  handleChange(e) {
    this.setState({categories: e.target.value})
  }

  render() {
    return (
      <form id="posting-form" onSubmit={this.handleSubmit}>
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
    				value={this.state.categories}
    				onChange={this.handleChange}>
            <option>Please pick one</option>
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
      	<input type="submit" value="Save Lives" />
      </form>
    );
  }
}

export default Form;
