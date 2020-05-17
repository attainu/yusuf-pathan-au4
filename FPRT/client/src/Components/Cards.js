/* eslint-disable */

import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import { connect } from 'react-redux';

class Cards extends Component {
  state = {
    categoryname: '',
    cards: [],
  };

  async componentDidMount() {
    const res = await axios.get('/card', {
      params: {
        categoryname: this.props.categoryname,
      },
    });
    const cards = this.state.cards.concat(res.data.card);
    const searchword = localStorage.getItem('search');
    if (searchword) {
      const arr = [];
      for (let i = 0; i < cards.length; i++) {
        if (searchword == cards[i].taskname) {
          arr.push(cards[i]);
        }
      }
      this.setState({
        cards: this.state.cards.concat(arr),
      });
      return;
    }
    this.setState({
      cards: cards,
    });
  }

  EditTaskName = (taskname) => {
    console.log(taskname);
    localStorage.setItem('taskname', taskname);
    window.location.replace('/edittaskname');
  };

  EditTaskStatus = (taskname, taskstatus) => {
    localStorage.setItem('taskname', taskname);
    localStorage.setItem('taskstatus', taskstatus);
    window.location.replace('/edittaskstatus');
  };

  EditCategory = (taskname, category) => {
    localStorage.setItem('taskname', taskname);
    localStorage.setItem('category', category);
    window.location.replace('/edittaskcategory');
  };

  ChangeOrder = (taskname, id) => {
    localStorage.setItem('taskname', taskname);
    localStorage.setItem('id', id);
    window.location.replace('/editorder');
  };

  DeleteTask = (id) => {
    axios
      .delete('/card', {
        data: { id: id },
      })
      .then((res) => {
        console.log(res.data);
      });
    window.location.reload();
  };

  render() {
    return (
      <Fragment>
        {this.state.cards &&
          this.state.cards.map((card) => {
            return (
              <Card style={{ margin: '1.5rem' }}>
                <Card.Body>
                  <Card.Title key={card.cardid}>{card.taskname}</Card.Title>
                  {card.taskstatus}
                  <br />
                  <br />
                  <Button
                    variant='outline-primary'
                    onClick={() => this.EditTaskName(card.taskname)}>
                    Edit Task Name
                  </Button>
                  <br />
                  <br />
                  <Button
                    variant='outline-primary'
                    onClick={() =>
                      this.EditTaskStatus(card.taskname, card.taskstatus)
                    }>
                    Change Task Status
                  </Button>
                  <br />
                  <br />
                  <Button
                    variant='outline-primary'
                    onClick={() =>
                      this.EditCategory(card.taskname, card.categoryname)
                    }>
                    Change Category
                  </Button>
                  <br />
                  <br />
                  <Button
                    variant='outline-primary'
                    onClick={() => {
                      this.ChangeOrder(card.taskname, card.cardid);
                    }}>
                    Change Order
                  </Button>
                  <br />
                  <br />
                  <Button
                    variant='outline-danger'
                    onClick={() => {
                      this.DeleteTask(card.cardid);
                    }}>
                    Delete Task
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
      </Fragment>
    );
  }
}

export default connect()(Cards);
