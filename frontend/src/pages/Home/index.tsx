import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from '../../components/Header'
import Profile from '../Profile'
import Feed from '../Feed'


function Home(): JSX.Element {

    const [user, setUser] = useState({ name: "" })

    useEffect(() => {
        const data: string | null = localStorage.getItem("@instaclone:user")
        const objJson: { name: string } = JSON.parse(data ? data : "")
        setUser(objJson)
    }, [])

    return (
        <>
            <Header />
            <Switch>
                <Route path="/home/feed" component={Feed} />
                <Route path={`/home/${user.name}`} component={Profile} />
            </Switch>
        </>
    )
}

export default Home