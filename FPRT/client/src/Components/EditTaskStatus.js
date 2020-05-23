import React, { Component, Fragment } from 'react';
import { Card, Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import axios from 'axios';

class EditTaskStatus extends Component {
  state = {
    taskname: '',
    taskstatus: '',
    newstatus: '',
  };

  componentDidMount() {
    const taskname = localStorage.getItem('taskname');
    const taskstatus = localStorage.getItem('taskstatus');
    this.setState({
      taskname: taskname,
      taskstatus: taskstatus,
    });
  }

  CardStatus = (status) => {
    this.setState({
      newstatus: status,
    });
  };

  AddStatus = async () => {
    const response = await axios.put('/card/:taskstatus', {
      taskname: this.state.taskname,
      oldstatus: this.state.taskstatus,
      newstatus: this.state.newstatus,
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
                <Form.Label>Present Status of Task</Form.Label>
                <Form.Control
                  type='text'
                  value={this.state.taskstatus}
                  onChange={(event) => this.CardName(event.target.value)}
                />
              </Form.Group>

              <DropdownButton
                id='dropdown-basic-button'
                title='Choose new Task Status'
                onSelect={(event) => {
                  this.CardStatus(event);
                }}>
                <Dropdown.Item eventKey='completed'>Completed</Dropdown.Item>
                <Dropdown.Item eventKey='pending'>Pending</Dropdown.Item>
                <Dropdown.Item eventKey='inprogress'>In Progress</Dropdown.Item>
                <Dropdown.Item eventKey='rejected'>Rejected</Dropdown.Item>
                <Dropdown.Item eventKey='cancelled'>Cancelled</Dropdown.Item>
              </DropdownButton>
              <br />
              <Button
                variant='outline-primary'
                onClick={() => {
                  this.AddStatus();
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

export default EditTaskStatus;
