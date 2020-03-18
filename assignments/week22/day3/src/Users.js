import React, { Component, Fragment } from "react";

class Users extends Component {
  render() {
    return (
      <Fragment>
        {this.props.users.map((user, id) => (
          <div key={id}>
            <p>Name: {user.name}</p>
            <p>City: {user.city}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </Fragment>
    );
  }
}

export default Users;
