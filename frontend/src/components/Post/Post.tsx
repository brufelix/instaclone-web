import React from 'react'
import img from '../../img/instaclone.png'
import Comment from '../Comment/Comment'
import Icons from '../Icons/Icons'
import './Post.css'

export default () => {
    return(
        <div className="post" >
            <img src={img} alt="Instaclone"/>
            <Icons/>
            <Comment/>
        </div>
    )
}