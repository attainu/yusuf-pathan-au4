import React, { Component, Fragment } from "react";

class Staticdata extends Component {
  render() {
    return (
      <Fragment>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Item name</th>
                <th>Cost</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.items.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>$ {item.cost}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      value={item.id}
                      onClick={this.props.add}
                    >
                      Add
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

export default Staticdata;
