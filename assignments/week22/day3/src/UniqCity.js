import React, { Component, Fragment } from "react";

class UniqCity extends Component {
  render() {
    return (
      <Fragment>
        {this.props.uniq.map((city, idx) => (
          <p key={idx}>
            <strong>{city}</strong>
          </p>
        ))}
      </Fragment>
    );
  }
}

export default UniqCity;
