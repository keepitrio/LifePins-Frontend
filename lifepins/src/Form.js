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
        <label>Provide an Amenity</label>
        <label>
            <input
              placeholder="Your name"
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
              id="accomodate"
              placeholder="How many people can you accomodate?"
              name="number_of_people"
              type="string"
              onChange={this.handleInputChange}
            />
        </label>
        <br />
        <label>
          <select id="provisions"
            value={this.state.categories}
            onChange={this.handleChange}>
            <option>What can you provide?</option>
            <option value="water">Water</option>
            <option value="food">Food</option>
            <option value="shower">Shower</option>
            <option value="bed">Bed</option>
          </select>
        </label>
        <br />
        <input id="prov-button" type="submit" value="Drop an AidPin" onSubmit={this.setPosting}/>
      </form>
      <p>AidPin lets you offer help to those in need after a natural disaster.</p>
      </div>
    );
  }
}

export default Form;
