import React from 'react'
import Header from '../../components/Header/Header'
import Post from '../../components/Post/Post'
import './Feed.css'

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