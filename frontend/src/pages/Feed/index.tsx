import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Post from '../../components/Post/'
import './Feed.css'

function Feed (): JSX.Element {
    let history = useHistory()
    
    useEffect(() => {
        let token = localStorage.getItem('@instaclone:token')
        if (!token?.trim()) {
            history.push('/signin')
        }
    }, [history])

    return (
        <>
            <div className="container-feed">
                <div className="feed">
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className="infor"></div>
            </div>
        </>
    )
} 

export default Feed