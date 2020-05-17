/* eslint-disable */

import React, { Fragment } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cards from './Cards';
import '../App.css';

class Category extends React.Component {
  state = {
    categories: [],
    cards: [],
  };
  async componentDidMount() {
    const response = await axios.get('/category');
    this.setState({
      categories: this.state.categories.concat(response.data.category),
    });
  }

  EditCategory = (name, id) => {
    localStorage.clear();
    localStorage.setItem('categoryname', name);
    localStorage.setItem('categoryid', id);
    window.location.replace('/editcategory');
  };

  DeleteCategory = (id) => {
    console.log('id', id);
    axios
      .delete('/category', {
        data: { id: id },
      })
      .then((res) => {
        console.log(res.data);
      });
    window.location.reload();
  };

  render = () => {
    return (
      <Fragment>
        {this.state.categories
          ? this.state.categories.map((category) => {
              return (
                <Card className='Category'>
                  <Card.Body>
                    <Card.Title key={category.categoryid}>
                      {category.categoryname}
                    </Card.Title>
                    <Button
                      variant='dark'
                      onClick={() => {
                        this.EditCategory(
                          category.categoryname,
                          category.categoryid
                        );
                      }}>
                      Edit Category
                    </Button>
                    <br />
                    <br />
                    <Button
                      variant='danger'
                      onClick={() => {
                        this.DeleteCategory(category.categoryid);
                      }}>
                      Delete Category
                    </Button>
                    <br />
                    <br />
                    <Cards categoryname={category.categoryname} />
                  </Card.Body>
                </Card>
              );
            })
          : null}
      </Fragment>
    );
  };
}

export default Category;
