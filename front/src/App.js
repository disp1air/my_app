import React from 'react';
import axios from "axios"
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      name: '',
      price: ''
    };
  }

  handleInputChange = event => {
    const inputName = event.target.name;
    this.setState({
      [inputName]: event.target.value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post('/app', this.state)
      .then(response => console.log(response));
  }

  handledb = () => {
    axios
      .post('/app/db', {first: 1})
      .then(response => console.log(response));
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            product_no:
              <input
                type="text"
                name="product"
                value={this.state.product_no}
                onChange={this.handleInputChange}
              />
          </label>

          <label>
            Name:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
          </label>

          <label>
            Price:
              <input
                type="text"
                name="price"
                value={this.state.price}
                onChange={this.handleInputChange}
              />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={this.handledb}>DB</button>
      </div>
    );
  }
}
