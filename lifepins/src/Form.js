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
      axios.get('http://localhost:3001/create', {params:
        {
        name: name,
        contact: contact, 
        address: address,
        categories: categories,
        number_of_people: number_of_people
        }
			})
		.then(function(response) {
      console.log("hurray")
			document.getElementById("posting-form").reset();
      window.location.reload();
			})
		.catch(function(error) {
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
      <div id="sidebar">
      <form id="posting-form" onSubmit={this.handleSubmit}>
      	<label>How can you help?</label>
      	<label>
      			<input
      				placeholder="Name"
      				name="name"
      				type="string"
      				onChange={this.handleInputChange}
      			/>
      	</label>
      	<br />
      	<label>
      			<input
      				placeholder="Phone number"
      				name="contact"
      				type="string"
      				onChange={this.handleInputChange}
      			/>
      	</label>
      	<br />
      	<label>
      			<input
      				placeholder="Address"
      				name="address"
      				type="string"
      				onChange={this.handleInputChange}
      			/>
      	</label>
      	<br />
        <label>
            <input
              placeholder="Number of people you can provide for"
              name="number_of_people"
              type="string"
              onChange={this.handleInputChange}
            />
        </label>
        <br />
      	<label>
      	<label id="provisions"> What can you provide? </label>
          <input type="checkbox" name="provisions" value="{this.state.value}" onChange={this.handleInputChange}/>Water<br/>
          <input type="checkbox" name="provisions" value="{this.state.value}" onChange={this.handleInputChange}/>Food<br/>
          <input type="checkbox" name="provisions" value="{this.state.value}" onChange={this.handleInputChange}/>Shower<br/>
          <input type="checkbox" name="provisions" value="{this.state.value}" onChange={this.handleInputChange}/>Bed<br/>
      	</label>
      	<br />
        <input id="prov-button" type="submit" value="Save Lives" onSubmit={this.setPosting}/>
      </form>
      <p>PLACEHOLDER TEXT</p>
      </div>
    );
  }
}

export default Form;
