import React, { Component, Fragment } from "react";

class NameEmail extends Component {
  render() {
    return (
      <Fragment>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={this.props.nameVal}
            onChange={this.props.change}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={this.props.emailVal}
            onChange={this.props.change}
          />
        </div>
      </Fragment>
    );
  }
}

export default NameEmail;
