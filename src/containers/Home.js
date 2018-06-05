import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

function template(str, context) {
  const pattern = /{(.*?)}+/g;
  return str.replace(pattern, function($1, $2) {
    return context[$2];
  });
}

let str = 'Hey {name}, today is {day}.';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      day: '',
      string: str
    };
  }

  handleSubmit = evt => {
    this.setState({ string: template(str, this.state) });
    this.state.name = '';
    this.state.day = '';
  };

  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handleDayChange = evt => {
    this.setState({ day: evt.target.value });
  };

  render() {
    return (
      <div>
        {' '}
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">{this.state.string}</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
        <form>
          <input
            type="text"
            placeholder="Enter Name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <input
            type="text"
            placeholder="Enter Day"
            value={this.state.day}
            onChange={this.handleDayChange}
          />
        </form>
        <button onClick={this.handleSubmit}>Activate Lasers</button>
      </div>
    );
  }
}
