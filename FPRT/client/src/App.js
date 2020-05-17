/* eslint-disable */

import React, { Fragment } from 'react';
import Category from './Components/Category';
import { Button, Navbar, Form, FormControl } from 'react-bootstrap';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import AddCard from './Components/AddCard.js';
import Home from './Components/Home.js';
import EditTaskName from './Components/EditTaskName';
import axios from 'axios';
import './App.css';
import EditTaskStatus from './Components/EditTaskStatus';
import EditTaskCategory from './Components/EditTaskCategory';
import EditCategory from './Components/EditCategory'

class App extends React.Component {
  render = () => {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path='/addcard' component={AddCard}></Route>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/edittaskname' component={EditTaskName}></Route>
            <Route
              exact
              path='/edittaskstatus'
              component={EditTaskStatus}></Route>
            <Route
              exact
              path='/edittaskcategory'
              component={EditTaskCategory}></Route>
            <Route exact path='/editcategory' component={EditCategory}></Route>
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  };
}

export default App;
