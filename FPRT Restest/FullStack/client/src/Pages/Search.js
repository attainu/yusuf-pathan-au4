/*eslint-disable*/

import React, { Component, Fragment } from 'react';
import { Button, Form, FormControl, Card } from 'react-bootstrap';
import axios from 'axios';

class Search extends Component {
  state = {
    user: '',
    users: [],
  };

  HandleSearch = (user) => {
    window.localStorage.setItem('search', user);
  };

  Search = async (e) => {
    e.preventDefault();
    const user = window.localStorage.getItem('search');
    const response = await axios.post('/user/search', {
      params: {
        user: user,
      },
    });
    this.setState({
      users: this.state.users.concat(response.data.user),
    });
    console.log(response.data);
  };

  render() {
    return (
      <Fragment>
        <Form inline onSubmit={this.Search}>
          <FormControl
            type='text'
            placeholder='Search'
            className='mr-sm-2'
            placeholder='Enter the user to search'
            onChange={(event) => {
              this.HandleSearch(event.target.value);
            }}
            required
          />
          <Button variant='outline-primary' type='submit'>
            Search
          </Button>
        </Form>

        {this.state.users &&
          this.state.users.map((user) => {
            return (
              <Fragment>
                <Card>
                  <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>{user.email}</Card.Text>
                  </Card.Body>
                  <br />
                </Card>
                ;
              </Fragment>
            );
          })}
      </Fragment>
    );
  }
}

export default Search;
