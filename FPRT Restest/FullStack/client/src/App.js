/*eslint-disable*/

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Post from './Pages/Post';
import Addpost from './Pages/Addpost';
import User from './Pages/User';
import Search from './Pages/Search';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

class App extends React.Component {
  Search = () => {
    window.location.replace('/search');
  };
  render = () => {
    return (
      <Fragment>
        <Navbar bg='light' variant='light'>
          <Navbar.Brand href='#home'>Connect</Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href='/post'>Posts</Nav.Link>
            <Nav.Link href='/user'>People</Nav.Link>
            <Nav.Link href='/'>Login</Nav.Link>
          </Nav>
          <Form inline>
            <Button
              variant='outline-primary'
              onClick={() => {
                this.Search();
              }}>
              Search
            </Button>
          </Form>
        </Navbar>

        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route exact path='/register' component={Register}></Route>
            <Route exact path='/post' component={Post}></Route>
            <Route exact path='/addpost' component={Addpost}></Route>
            <Route exact path='/user' component={User}></Route>
            <Route exact path='/search' component={Search}></Route>
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  };
}

export default App;
