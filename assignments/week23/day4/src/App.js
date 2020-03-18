import React, { Component } from "react";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav">
              <Link to="/users">
                <li>
                  <a className="nav-link">Users</a>
                </li>
              </Link>
              <Link to="/products">
                <li>
                  <a className="nav-link">Products</a>
                </li>
              </Link>
              <Link to="/orders">
                <li>
                  <a className="nav-link">Orders</a>
                </li>
              </Link>
            </ul>
          </nav>
          <div>
            <Route path="/">
              <div className="home">
                <h3>Welcome to Home page</h3>
              </div>
            </Route>

            <Route path="/users">
              <div className="users">
                <ul>
                  <Link to="/users/YusufPathan">
                    <li>Yusuf Pathan</li>
                  </Link>
                  <Link to="/users/AsifPathan">
                    {" "}
                    <li>Asif Pathan</li>
                  </Link>
                  <Link to="/users/SaimaPathan">
                    <li>Saima Pathan</li>
                  </Link>
                  <Link to="/users/AdilAlvi">
                    <li>Adil Alvi</li>
                  </Link>
                  <Link to="/users/AqibAlvi">
                    <li>Aqib Alvi</li>
                  </Link>
                </ul>
                <Route path="/users/YusufPathan">
                  <div>Yusuf Pathan is Full stack developer.</div>
                </Route>
                <Route path="/users/AsifPathan">
                  <div>Asif Pathan is EC engineer.</div>
                </Route>
                <Route path="/users/SaimaPathan">
                  <div>Saima Pathan is homemaker</div>
                </Route>
                <Route path="/users/AdilAlvi">
                  <div>Adil Alvi is Mechnical Engineer.</div>
                </Route>
                <Route path="/users/AqibAlvi">
                  <div>Aqib Alvi is EC engineer.</div>
                </Route>
              </div>
            </Route>

            <Route path="/products">
              <div className="products">
                <ul>
                  <Link to="/products/laptop">
                    {" "}
                    <li>Laptop</li>
                  </Link>
                  <Link to="/products/mobile">
                    <li>Mobile</li>
                  </Link>
                  <Link to="/products/smartTv">
                    <li>Smart Tv</li>
                  </Link>
                  <Link to="/products/pendrive">
                    {" "}
                    <li>Pendrive</li>
                  </Link>
                  <Link to="/products/harddisk">
                    {" "}
                    <li>HardDisk</li>
                  </Link>
                </ul>
                <Route path="/products/laptop">
                  <div>You can find different typs of Laptop here.</div>
                </Route>
                <Route path="/products/mobile">
                  <div>You can find different typs of Mobile here.</div>
                </Route>
                <Route path="/products/smartTv">
                  <div>You can find different typs of Smart Tv here.</div>
                </Route>
                <Route path="/products/pendrive">
                  <div>You can find different typs of Pendrive here.</div>
                </Route>
                <Route path="/products/harddisk">
                  <div>You can find different typs of Harddisk here.</div>
                </Route>
              </div>
            </Route>

            <Route path="/orders">
              <div className="orders">
                <ul>
                  <Link to="/orders/order1">
                    <li>Mobile</li>
                  </Link>
                  <Link to="/orders/order2">
                    <li>Harddisk</li>
                  </Link>
                  <Link to="/orders/order3">
                    <li>Smart Tv</li>
                  </Link>
                </ul>

                <Route path="/orders/order1">
                  <div>Your order for Mobile.</div>
                </Route>
                <Route path="/orders/order2">
                  <div>Your order for harddisk</div>
                </Route>
                <Route path="/orders/order3">
                  <div>Your order for smart tv</div>
                </Route>
              </div>
            </Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
