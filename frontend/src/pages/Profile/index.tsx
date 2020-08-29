import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import gql from 'graphql-tag'

import Post from '../../components/Post'
import img from '../../img/instaclone.png'
import { useAuth } from '../../hooks/auth'
import { TUser } from '../../types/types'
import api from '../../service/graphql'
import './Profile.css'

function Profile(): JSX.Element {
    const [user, setUser] = useState({} as TUser)
    let history = useHistory()
    const { signOut } = useAuth()

    function handleSignOut() {
        signOut()
        history.push("/signin")
    }

    useEffect(() => {
        const dataUser = localStorage.getItem("@instaclone:user")
        const objUser: TUser = JSON.parse(dataUser ? dataUser : "")

        setUser(objUser)
    }, [])

    useEffect(() => {
        const { _id } = user
        if (_id) {
            api.query({
                query: gql`
                    query( $_id: ID! ) {
                        user( _id: $_id ) {
                                _id name bio followers following
                            }
                        }`,
                variables: { _id }
            }).then(response => {
                const { data } = response
                setUser(data.user)
            })
        }
    }, [user])

    return (
        <>
            <div className="container-profile">
                <header className="container-header-profile">
                    <div className="img-container">
                        <img src={img} alt="" />
                    </div>
                    <section className="container-section">
                        <div className="row01">
                            <h1>{user.name}</h1>
                            <button>Edit profile</button>
                            <button onClick={() => handleSignOut()}>Sign out</button>
                        </div>
                        <div className="row02">
                            <ul>
                                <li><strong>8</strong> Publicações</li>
                                <li><strong>{user.followers}</strong> Seguidores </li>
                                <li><strong>{user.following}</strong> Seguindo</li>
                            </ul>
                        </div>
                        <div className="bio">
                            <p>{user.bio}</p>
                        </div>
                    </section>
                </header>
                <div className="posts-profile">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </>
    )
}

export default Profile