import React from 'react'
import './Post.css'

import Avatar from '@material-ui/core/Avatar'


function Post() {
    return (
        <div className="post">
            <div className="post_header">
            <Avatar
            className="post_Avatar"
            alt="Ra"
            src="/static/images/avatar/1.jpg"

            />
            <h3>username</h3>
            </div>
            <img className="post_image" src="https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"></img>
            <h4 className="post_text"><strong>userName</strong> : caption</h4>
       
        </div>
    )
}

export default Post
