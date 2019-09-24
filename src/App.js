import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    };

  }
  componentWillMount() {
    this.getDataAxios()
  }

  getDataAxios() {
    axios.get(`https://my-json-server.typicode.com/ayman-uxbert/test-fake-api/posts`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }

  render() {
    return (  
      <ul>
        {this.state.posts.map(post => <li>{post.title}</li>)}
      </ul>
    )
  }
}

export default App;
