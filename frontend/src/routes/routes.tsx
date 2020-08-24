import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import Authentication from '../pages/SignIn'
import Feed from '../pages/Feed/'

export default () => {
    return (
        <Switch>
            <Route path="/signin" component={Authentication} />
            <Route path="/signup" component={Authentication} />
            <Route path="/feed" component={Feed} />
            <Redirect from="/" to="/signin" />
        </Switch>
    )
}