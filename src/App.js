import logo from './logo.svg';
import './App.css';
import Post from './Post'
import React ,{useState} from 'react'

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Elon Musk",
      caption: " wow",
      imageurl: "https://cdn.vox-cdn.com/thumbor/05Fm-f6FL70DdyFKmh6jd7sz0TI=/0x0:4000x2840/1200x800/filters:focal(2335x1426:2975x2066)/cdn.vox-cdn.com/uploads/chorus_image/image/69001757/1229901940.0.jpg"
    },
    {
      username: "Mark zuckerberg",
      caption: " wow",
      imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8UdZriwrQVP9YaUwT96ScZTmMYYhfNRi1Gw&usqp=CAU"
    }
  ])
  return (
    <div className="App">
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""></img>
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
