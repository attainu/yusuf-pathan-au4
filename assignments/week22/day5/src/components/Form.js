import React, { Component } from "react";
import { connect } from "react-redux";
import { stateMapper } from "../store/store";

class Form extends Component {
  state = {
    todo: "",
    date: "",
    completed: false,
    edit: false
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.todo.trim().length < 1) {
      alert("Type something before adding a todo!");
      return;
    }
    const payload = {
      todo: this.state.todo,
      date: this.state.date,
      completed: this.state.completed
    };

    this.props.dispatch({
      type: "ADD_TODO",
      data: payload
    });

    this.setState({
      todo: "",
      date: ""
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-primary text-center display-4">Todo App</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="todo">To-do item</label>
            <input
              type="text"
              className="form-control"
              name="todo"
              value={this.state.todo}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Deadline</label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Add todo
          </button>
        </form>
      </div>
    );
  }
}

export default connect(stateMapper)(Form);
