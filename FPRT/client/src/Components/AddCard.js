/* eslint-disable */

import React, { Component, Fragment } from 'react';
import { Form, Button, Card, DropdownButton, Dropdown } from 'react-bootstrap';
import axios from 'axios';

class AddCard extends Component {
  state = {
    cardname: '',
    cardstatus: '',
    category: '',
    categories: [],
  };

  async componentDidMount() {
    const response = await axios.get('/category');
    this.setState({
      categories: this.state.categories.concat(response.data.category),
    });
  }

  CardName = (name) => {
    this.setState({
      cardname: name,
    });
  };

  CardStatus = (status) => {
    this.setState({
      cardstatus: status,
    });
  };

  CategoryName = (category) => {
    this.setState({
      category: category,
    });
  };

  AddCard = async () => {
    console.log('Inside button');
    const response = await axios.post('/card', {
      categoryname: this.state.category,
      taskname: this.state.cardname,
      taskstatus: this.state.cardstatus,
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
                <Form.Label>Task</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Task Name'
                  onChange={(event) => this.CardName(event.target.value)}
                />
              </Form.Group>

              <DropdownButton
                id='dropdown-basic-button'
                title='Category'
                onSelect={(event) => {
                  this.CategoryName(event);
                }}>
                {this.state.categories &&
                  this.state.categories.map((category) => {
                    return (
                      <Dropdown.Item eventKey={category.categoryname}>
                        {category.categoryname}
                      </Dropdown.Item>
                    );
                  })}
              </DropdownButton>
              <br />
              <DropdownButton
                id='dropdown-basic-button'
                title='Task Status'
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
                  this.AddCard();
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

export default AddCard;
