import React, { Component, Fragment } from "react";

class City extends Component {
  render() {
    return (
      <Fragment>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            name="city"
            value={this.props.cityVal}
            onChange={this.props.change}
          />
        </div>
      </Fragment>
    );
  }
}

export default City;
