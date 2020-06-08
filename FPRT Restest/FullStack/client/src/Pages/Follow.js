import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Addcomment from './Addcomment';
import Comment from './Comment';
import { Card, Button, Alert } from 'react-bootstrap';

class Follow extends Component {
  state = {
    follows: [],
    liked: '',
    posts: [],
  };

  async componentDidMount() {
    const userid = window.localStorage.getItem('userid');
    const response = await axios.get('/follow/follow?userid=' + userid);

    console.log(response.data.follows);

    this.setState({
      follows: this.state.follows.concat(response.data.follows),
    });
  }

  HandleLike = async (userid, postid) => {
    const response = await axios.post('/like', {
      userid,
      postid,
    });
    this.setState({
      liked: response.data.message,
    });
  };

  render() {
    const userid = window.localStorage.getItem('userid');
    const post = this.props.post;
    const name = this.props.name;
    return (
      <Fragment>
        {this.state.follows &&
          this.state.follows.map((follow) => {
            if (follow.followname == name) {
              return (
                <Card>
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{post}</Card.Text>
                    <Button
                      variant='outline-success'
                      onClick={() => {
                        this.HandleLike(userid, this.props.postid);
                      }}>
                      Like
                    </Button>
                    <br />
                    {this.state.liked == 'success' && (
                      <Alert variant='success'> You liked this post</Alert>
                    )}
                    <br />
                    {this.state.liked == 'already liked' && (
                      <Alert variant='warning'>
                        {' '}
                        You already liked this post
                      </Alert>
                    )}
                    <br />
                    <Addcomment postid={this.props.postid} />
                    <br />
                    <Comment postid={this.props.postid} />
                  </Card.Body>
                </Card>
              );
            }
          })}
      </Fragment>
    );
  }
}

export default Follow;
