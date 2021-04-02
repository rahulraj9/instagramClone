import logo from './logo.svg';
import './App.css';
import Post from './Post'
import React, { useState, useEffect } from 'react'
import { db } from './firebase'
function App() {
  const [posts, setPosts] = useState([])

  //useEffect Run a peice of code on specif condition


  useEffect(() => {

    db.collection('posts').onSnapshot(snapshot => {

      setPosts(snapshot.docs.map(doc => doc.data()))
      console.log(setPosts(snapshot.docs.map(doc => doc.data())))
    })
  }, [])

  return (
    <div className="App">
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=" "></img>
      </div>

      {
        posts.map(post =>{
          return <Post username={post.username} caption={post.caption} imageurl ={post.imageurl} />
        })

      }


    </div>
  );
}

export default App;
