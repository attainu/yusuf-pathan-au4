import React from "react";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import Table from "./Pages/Table.js";
import Waiter from "./Pages/Waiter.js";
import Menu from "./Pages/Menu.js";
import Order from "./Pages/Order.js";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/tables">
          <div>
            <select>
              <option>table1</option>
              <option>table2</option>
              <option>table3</option>
              <option>table4</option>
              <option>table5</option>
              <option>table6</option>
            </select>
            <Link to="waiter">
              <button>next</button>
            </Link>
            <Table />
          </div>
        </Route>
        <Route path="/waiter">
          <div>
            <select>
              <option>waiter1</option>
              <option>waiter2</option>
              <option>waiter3</option>
              <option>waiter4</option>
              <option>waiter5</option>
              <option>waiter6</option>
            </select>
            <Link to="/order">
              <button>next</button>
            </Link>
            <Waiter />
          </div>
        </Route>
        <Route path="/order">
          <div>
            <div className="row">
              <div className="col-6">
                <input type="text" placeholder="Customer-name" required />
                <input type="number" placeholder="Customer-mobile" required />
                <br />
                <br />
                <br />
                <h3>Menu</h3>
                <select>
                  <option>noodles - 50</option>
                  <option>fried rice - 60</option>
                  <option>pav bhaji - 55</option>
                  <option>vada pav - 10</option>
                </select>
                <Menu />
              </div>
              <div className="col-6">
                <button>Generate Bill</button>

                <Order />
              </div>
            </div>
          </div>
        </Route>
        <Redirect exact from="/" to="/tables" />
      </BrowserRouter>
    );
  }
}

export default App;
