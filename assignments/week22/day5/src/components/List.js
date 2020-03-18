import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { stateMapper } from "../store/store";
import { Modal } from "react-bootstrap";

class List extends Component {
  state = {
    data: this.props.todo,
    show: false,
    todo: "",
    date: "",
    toEdit: ""
  };

  handleShow = () => {
    this.setState({
      show: true
    });
  };

  handleClose = () => {
    this.setState({
      show: false
    });
  };

  edit = todoName => {
    this.handleShow();
    this.setState({
      toEdit: todoName
    });
  };

  all = () => {
    this.setState({
      data: this.props.todo
    });
  };

  completedFilter = () => {
    const newData = this.props.todo.filter(obj => {
      return obj.completed === true;
    });
    this.setState({
      data: newData
    });
  };

  inCompleteFilter = () => {
    const newData = this.props.todo.filter(obj => {
      return obj.completed === false;
    });
    this.setState({
      data: newData
    });
  };

  handleFilter = e => {
    const { value } = e.target;
    if (value === "all") {
      this.all();
    } else if (value === "completed") {
      this.completedFilter();
    } else if (value === "todo") {
      this.inCompleteFilter();
    }
  };

  delete = todoName => {
    this.props.dispatch({
      type: "DELETE_TODO",
      data: todoName
    });
  };

  completedTodo = todoName => {
    this.props.dispatch({
      type: "COMPLETED",
      data: todoName
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.todo !== this.props.todo) {
      this.setState({
        data: this.props.todo
      });
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  updateTodo = () => {
    const payload = {
      toEdit: this.state.toEdit,
      todo: this.state.todo,
      date: this.state.date
    };
    this.props.dispatch({
      type: "EDIT_TODO",
      data: payload
    });
    this.handleClose();
  };

  render() {
    const data = this.state.data;
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <select
                onChange={this.handleFilter}
                className="form-control mb-5"
              >
                <option value="all">all</option>
                <option value="completed">Completed</option>
                <option value="todo">Todo</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Todo</th>
                    <th>Deadline</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length < 1 ? (
                    <tr>
                      <td>You are all caught up!</td>
                    </tr>
                  ) : (
                    data.map((obj, idx) => (
                      <tr key={idx}>
                        <td
                          className={
                            obj.completed
                              ? "todo text-success"
                              : "todo text-danger"
                          }
                          onClick={() => this.completedTodo(obj.todo)}
                        >
                          {obj.todo}
                        </td>
                        <td>{obj.date}</td>
                        <td>
                          <span
                            className="badge badge-danger mr-3"
                            onClick={() => this.delete(obj.todo)}
                          >
                            DELETE
                          </span>
                          <span
                            className="badge badge-success"
                            onClick={() => this.edit(obj.todo)}
                          >
                            EDIT
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit this todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-primary" onClick={this.updateTodo}>
              Update
            </button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default connect(stateMapper)(List);
