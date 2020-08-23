import React from 'react'
import Header from '../../components/Header/'
import Post from '../../components/Post/'
import './Feed.css'

export default () => {
    return(
        <>
            <Header />  
            <div className="container-feed">
                <div className="feed">
                    <Post/>
                    <Post/>
                </div>
                <div className="infor"></div>
            </div>
        </>
    )
} 