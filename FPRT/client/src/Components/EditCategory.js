/* eslint-disable */

import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Card, Form, Button, Col } from 'react-bootstrap';

class EditCategory extends Component {
  state = {
    category: '',
    newcategory: '',
  };
  componentDidMount() {
    const category = localStorage.getItem('categoryname');
    this.setState({
      category: category,
    });
  }

  CategoryChange = (category) => {
    this.setState({
      newcategory: category,
    });
  };

  EditCategory = async () => {
    const response = await axios.put('/category/categoryname', {
      newcategory: this.state.newcategory,
      oldcategory: this.state.category,
    });
    const res = await axios.post('/card/categorychange', {
      newcategory: this.state.newcategory,
      oldcategory: this.state.category,
    });
    console.log(res.data);
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
                <Form.Label>Present name of the category</Form.Label>
                <Col sm='10'>
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue={this.state.category}
                  />
                </Col>
              </Form.Group>
              <Form.Group>
                <Form.Label>Enter name for the category</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Category Name'
                  onChange={(event) => this.CategoryChange(event.target.value)}
                />
              </Form.Group>
              <Button
                variant='outline-primary'
                onClick={() => this.EditCategory()}>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Fragment>
    );
  }
}

export default EditCategory;
