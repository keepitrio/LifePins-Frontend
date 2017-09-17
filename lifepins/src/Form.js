import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from 'react-dropdown';

class Form extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
			contact: '',
			address: '',
			category: '',
			numberOfPeople: '',
			dropdownValue: 'Category'
		}

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;

		this.setState({
			[name]: value
		});
	}

  render() {
    return (
      <form>
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
      				name="numberOfPeople"
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
