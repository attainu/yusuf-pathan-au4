import React, { Component, Fragment } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';

class EditTaskName extends Component {
  state = {
    taskname: '',
    newname: '',
  };

  componentDidMount() {
    const taskname = localStorage.getItem('taskname');
    this.setState({
      taskname: taskname,
    });
  }

  EditName = (name) => {
    this.setState({
      newname: name,
    });
  };

  ChangeName = () => {
    const response = axios.put('/card', {
      oldname: this.state.taskname,
      newname: this.state.newname,
    });
    console.log(response.data);
  };

  Back = () => {
    localStorage.clear();
    window.location.replace('/');
  };

  render() {
    return (
      <Fragment>
        <Button
          variant='link'
          onClick={() => {
            this.Back();
          }}>
          Back
        </Button>
        <Card style={{ width: '40rem', margin: '2rem auto' }}>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Label>Current Task Name</Form.Label>
                <Form.Control
                  type='text'
                  value={this.state.taskname}
                  onChange={(event) => this.CardName(event.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>New Task Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='New Task Name'
                  onChange={(event) => this.EditName(event.target.value)}
                />
              </Form.Group>
              <br />
              <Button
                variant='outline-primary'
                onClick={() => {
                  this.ChangeName();
                }}>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Fragment>
    );
  }
}

export default EditTaskName;
