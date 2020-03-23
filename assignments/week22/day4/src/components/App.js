import React, { Component, Fragment } from "react";
import Staticdata from "./StaticData";
import Cart from "./Cart";

class App extends Component {
  state = {
    items: [
      { id: "1", name: "Orange", cost: 5 },
      { id: "2", name: "Apple", cost: 10 },
      { id: "3", name: "Peach", cost: 8 }
    ],
    carts: [],
    cartsTotal: 0
  };

  componentDidUpdate() {
    const total = this.state.carts.reduce((acc, item) => item.cost + acc, 0);
    if (this.state.cartsTotal !== total) {
      this.setState({
        cartsTotal: total
      });
    }
  }

  addTocart = e => {
    const id = e.target.value;
    const newItem = this.state.items.filter(item => item.id === id);
    this.setState({
      carts: [...this.state.carts, newItem[0]]
    });
  };

  deleteFromCart = e => {
    const id = e.target.value;
    const restOfItems = this.state.carts.filter(
      (item, idx) => idx.toString() !== id
    );
    this.setState({
      carts: restOfItems
    });
  };

  clearCart = () => {
    this.setState({
      carts: []
    });
  };

  render() {
    return (
      <Fragment>
        <div className="container-fluid bg-dark text-white text-center">
          <h1 className="display-4">React APP</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Staticdata items={this.state.items} add={this.addTocart} />
            </div>
            <div className="col-6">
              <Cart carts={this.state.carts} delete={this.deleteFromCart} />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <button
                className="btn btn-primary text-center"
                onClick={this.clearCart}
              >
                Checkout
              </button>
            </div>
            <div className="col-6">
              <span className="badge badge-warning mt-3">
                Cart Total: $ {this.state.cartsTotal}
              </span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
