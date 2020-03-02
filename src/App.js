import React, { Component } from 'react'
import './App.css'

import Header from './Components/Header'
import PostList from './Components/PostList'


class App extends Component {
  
  render(){
    return (
      <>
        <Header />
        <PostList />        
      </>
    )
  }
}

export default App;