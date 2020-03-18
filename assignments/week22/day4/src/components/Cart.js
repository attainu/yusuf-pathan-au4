import React, { Component, Fragment } from "react";

class Cart extends Component {
  render() {
    const data = this.props.carts;
    return (
      <Fragment>
        <div className="table-responsive">
          <table className="table cart">
            <thead>
              <tr>
                <th>Item name</th>
                <th>Cost</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((cart, idx) => (
                  <tr key={idx}>
                    <td>{cart.name}</td>
                    <td>$ {cart.cost}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        value={idx}
                        onClick={this.props.delete}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="lead text-danger">Nothing to show!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

export default Cart;
