/*eslint-disable*/

import React, { Component, Fragment } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import '../App.css';
import Follow from './Follow';

class Post extends Component {
  state = {
    posts: [],
    userposts: [],
  };

  async componentDidMount() {
    const userid = window.localStorage.getItem('userid');

    let response = await axios.get('/post');
    const posts = await axios.get('/post/post?userid=' + userid);
    this.setState({
      posts: this.state.posts.concat(response.data.posts),
      userposts: this.state.userposts.concat(posts.data.post),
    });
  }

  CreatePost = () => {
    window.location.replace('/addpost');
  };

  render() {
    const userid = window.localStorage.getItem('userid');
    return (
      <Fragment>
        <Button
          variant='primary'
          style={{ margin: '2rem' }}
          onClick={() => this.CreatePost()}>
          Create Post
        </Button>
        {this.state.userposts &&
          this.state.userposts.map((post) => {
            console.log(post)
            if (post.userid == userid) {
              return (
                <Card>
                  <Card.Body>
                    <Card.Title>{post.name}</Card.Title>
                    <Card.Text>{post.post}</Card.Text>
                  </Card.Body>
                </Card>
              );
            }
          })}
        {this.state.posts &&
          this.state.posts.map((post) => {
            return (
              <Follow
                userid={post.userid}
                name={post.name}
                post={post.post}
                postid={post.id}
              />
            );
          })}
      </Fragment>
    );
  }
}

export default Post;
