import React, { Component } from 'react';
import './PostList.css'

import Post from './Post'



class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Alan Andrade",
          avatar: "https://avatars2.githubusercontent.com/u/17729849?s=460&v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
            },
            content: "Faala Dev, em breve estaremos divulgando as vagas na plataforma"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Alan Andrade",
          avatar: "https://avatars2.githubusercontent.com/u/17729849?s=460&v=4"
        },
        date: "05 Jun 2019",
        content: "Gostaria de Parabenizar a Rocket",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
            },
            content: "Falaa Alan, Obrigadão!!"
          },
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
            },
            content: "hauhauahuahau!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Alan Andrade",
          avatar: "https://avatars2.githubusercontent.com/u/17729849?s=460&v=4"
        },
        date: "05 Jun 2019",
        content: "Gostaria de Parabenizar a Rocket",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
            },
            content: "Falaa Alan, Obrigadão!!"
          }
        ]
      }
    ]
  };

  render(){
    const { posts } = this.state;

    return (
      <div className="postList">
        {posts.map (post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    )
  }
}

export default PostList;