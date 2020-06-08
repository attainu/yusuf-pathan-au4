import React, { Component, Fragment } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

class Addcomment extends Component {
  state = {
    comment: '',
    message: '',
  };

  HandleChange = (comment) => {
    this.setState({
      comment: comment,
    });
  };

  AddComment = async (e) => {
    e.preventDefault();
    const userid = window.localStorage.getItem('userid');
    const email = window.localStorage.getItem('email');
    const name = window.localStorage.getItem('name');
    let postid = this.props.postid;
    let response = await axios.post('/comment', {
      postid: postid,
      comment: this.state.comment,
      userid: userid,
      name: name,
      email: email,
    });
    this.setState({
      message: response.data.message,
    });
    window.location.reload()
  };

  render() {
    return (
      <Fragment>
        <div className='container'>
          <Form style={{ width: '18rem' }} onSubmit={this.AddComment}>
            <Form.Group>
              <Form.Label>Add comment</Form.Label>
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
            <Alert variant='success'> Comment Added</Alert>
          )}
        </div>
      </Fragment>
    );
  }
}

export default Addcomment;
