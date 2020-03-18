import React, { Component } from "react";
import "./styles.css";
import NameEmail from "./NameEmail";
import City from "./City";
import Users from "./Users";
import UniqCity from "./UniqCity";

export default class App extends Component {
  state = {
    name: "",
    email: "",
    city: "",
    users: [],
    uniq: []
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = () => {
    const userData = {
      name: this.state.name,
      email: this.state.email,
      city: this.state.city
    };
    this.setState({
      users: [...this.state.users, userData],
      name: "",
      email: "",
      city: ""
    });
    this.findUniq();
  };
  findUniq = () => {
    const city = this.state.city;
    if (this.state.uniq.includes(city) === false) {
      this.setState({
        uniq: [...this.state.uniq, city]
      });
    }
  };

  render() {
    return (
      <div className="App">
        <UniqCity uniq={this.state.uniq} />
        <NameEmail
          change={this.handleChange}
          nameVal={this.state.name}
          emailVal={this.state.email}
        />
        <City change={this.handleChange} cityVal={this.state.city} />
        <button className="btn btn-primary" onClick={this.handleSubmit}>
          Submit
        </button>
        <Users users={this.state.users} />
      </div>
    );
  }
}
