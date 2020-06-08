/*eslint-disable*/

import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Badge, Card, Alert } from 'react-bootstrap';

class Comment extends Component {
  state = {
    comments: [],
  };

  async componentDidMount() {
    const postid = this.props.postid;
    let response = await axios.get('/comment/comment?postid=' + postid);
    console.log(response.data.comments);
    this.setState({
      comments: this.state.comments.concat(response.data.comments),
    });
  }

  render() {
    return (
      <Fragment>
        <Badge pill variant='info'>
          Comments
        </Badge>
        <br />
        <br/>
        {this.state.comments &&
          this.state.comments.map((comment) => {
            return (
              <Fragment>
                <Card style={{ margin: '0rem', padding: '0.5rem' }}>
                  <Card.Title>{comment.name}</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    {comment.comment}
                  </Card.Subtitle>
                </Card>
                <br />
              </Fragment>
            );
          })}
      </Fragment>
    );
  }
}

export default Comment;
