/*eslint-disable*/

import React, { Component, Fragment } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

class Addpost extends Component {
  state = {
    post: '',
    message: '',
  };

  HandleChange = (post) => {
    this.setState({
      post: post,
    });
  };

  AddPost = async (e) => {
    e.preventDefault();
    const userid = window.localStorage.getItem('userid');
    const email = window.localStorage.getItem('email');
    const name = window.localStorage.getItem('name');
    console.log(userid, this.state.post);
    const response = await axios.post('/post', {
      post: this.state.post,
      userid: userid,
      name: name,
      email: email,
    });
    this.setState({
      message: response.data.message,
    });
    window.location.replace('/post');
  };

  render() {
    return (
      <Fragment>
        <Form style={{ width: '18rem' }} onSubmit={this.AddPost}>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Add Post</Form.Label>
            <Form.Control
              type='text'
              placeholder='Add text'
              onChange={(event) => {
                this.HandleChange(event.target.value);
              }}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
        {this.state.message == 'success' && (
          <Alert variant='success'>Post Added</Alert>
        )}
      </Fragment>
    );
  }
}

export default Addpost;
