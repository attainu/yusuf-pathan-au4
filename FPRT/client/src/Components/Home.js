/* eslint-disable */

import React, { Component, Fragment } from 'react';
import Category from './Category.js';
import { Button, Navbar, Form, FormControl, Nav } from 'react-bootstrap';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import AddCard from './AddCard.js';
import axios from 'axios';
import '../App.css';

export default class Home extends Component {
  state = {
    category: '',
    searchword: '',
  };

  AddCategoryChange = (category) => {
    this.setState({
      category: category,
    });
  };

  AddCategory = async () => {
    const response = await axios.post('/category', {
      category: this.state.category,
    });
    console.log(response.data);
    window.location.reload();
  };

  AddCard = () => {
    window.location.replace('/addcard');
  };

  SearchTerm = (word) => {
    this.setState({
      searchword: word,
    });
  };

  Search = () => {
    localStorage.setItem('search', this.state.searchword);
    window.location.reload()
  };

  render() {
    return (
      <Fragment>
        <Navbar bg='primary' variant='dark'>
          <Navbar.Brand href='#home'>Trello</Navbar.Brand>
          <Nav className='mr-auto'></Nav>
          <Form inline>
            <FormControl
              type='text'
              placeholder='Add Category'
              className='ml-sm-2'
              onChange={(event) => this.AddCategoryChange(event.target.value)}
            />
            <Button
              variant='dark'
              onClick={() => {
                this.AddCategory();
              }}>
              Add
            </Button>
          </Form>

          <Form inline>
            <FormControl
              type='text'
              placeholder='Search'
              className='ml-sm-5'
              onChange={(event) => {
                this.SearchTerm(event.target.value);
              }}
            />
            <Button variant='dark' onClick={() => this.Search()}>
              Search
            </Button>
          </Form>
        </Navbar>
        <Button
          style={{ margin: '2rem', padding: 'auto' }}
          variant='outline-primary'
          onClick={() => {
            this.AddCard();
          }}>
          Add Card
        </Button>
        <br />
        <Category />
      </Fragment>
    );
  }
}
