import React from 'react'
import Header from '../components/Header'
import Post from '../components/Post'
import '../styles/feed.css'

export default () => {
    return(
        <React.StrictMode>
            <Header />  
            <div className="container-feed">
                <div className="feed">
                    <Post/>
                    <Post/>
                </div>
                <div className="infor"></div>
            </div>
        </React.StrictMode>
    )
} 