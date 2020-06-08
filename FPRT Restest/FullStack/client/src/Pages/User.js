/*eslint-disable*/

import React, { Component, Fragment } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

class People extends Component {
  state = {
    users: [],
    message:''
  };

  async componentDidMount() {
    const username = window.localStorage.getItem('name');
    let response = await axios.get('/user');
    let Index;
    response.data.users.map((user, index, arr) => {
      if (username == user.name) {
        Index = index;
      }
    });
    let newarr = response.data.users;
    newarr.splice(Index, 1);
    this.setState({
      users: this.state.users.concat(response.data.users),
    });
    console.log(response.data);
  }

  HandleFollow = async (followid, followname, followemail) => {
    const userid = window.localStorage.getItem('userid');
    let response = await axios.post('/follow', {
      userid: userid,
      followid: followid,
      followname: followname,
      followemail: followemail,
    });
    this.setState({
      message:response.data.message
    })
    
  };

  render() {
    // const username = window.localStorage.getItem('name');
    return (
      <Fragment>
        {this.state.users &&
          this.state.users.map((user) => {
            return (
              <Fragment>
                <Card>
                  <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>{user.email}</Card.Text>
                  </Card.Body>
                  <Button
                    variant='outline-primary'
                    style={{ width: '10rem' }}
                    className = 'ml-3'
                    onClick={() => {
                      this.HandleFollow(user.id, user.name, user.email);
                    }}>
                    Follow
                  </Button>
                  <br />
                  {/* {this.state.message == 'already followed' && <Alert variant = 'warning'>Already following</Alert>}
                  {this.state.message == 'success' && <Alert variant = 'success'>following</Alert>} */}
                </Card>
              </Fragment>
            );
          })}
      </Fragment>
    );
  }
}

export default People;
