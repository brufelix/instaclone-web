import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from '../../components/Header'
import Profile from '../Profile'
import Feed from '../Feed'


function Home(): JSX.Element {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/home/feed" component={Feed} />
                <Route path="/home/profile" component={Profile} />
            </Switch>
        </>
    )
}

export default Home