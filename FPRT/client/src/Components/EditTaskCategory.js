/* eslint-disable */

import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Card, Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';

class EditTaskCategory extends Component {
  state = {
    taskname: '',
    category: '',
    categories: [],
    newcategory: '',
  };

  async componentDidMount() {
    const taskname = localStorage.getItem('taskname');
    const category = localStorage.getItem('category');
    const response = await axios.get('/category');
    this.setState({
      taskname: taskname,
      category: category,
      categories: this.state.categories.concat(response.data.category),
    });
  }

  CardCategory = (category) => {
    this.setState({
      newcategory: category,
    });
  };

  ChangeCategory = async () => {
    const response = await axios.post('/card/category', {
      oldcategory: this.state.category,
      newcategory: this.state.newcategory,
      taskname: this.state.taskname,
    });
    console.log(response.data)
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
                <Form.Label>Present Category of the task</Form.Label>
                <Form.Control
                  type='text'
                  value={this.state.category}
                  onChange={(event) => this.CardName(event.target.value)}
                />
              </Form.Group>

              <DropdownButton
                id='dropdown-basic-button'
                title='Choose new Category'
                onSelect={(event) => {
                  this.CardCategory(event);
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
              <Button
                variant='outline-primary'
                onClick={() => {
                  this.ChangeCategory();
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

export default EditTaskCategory;
