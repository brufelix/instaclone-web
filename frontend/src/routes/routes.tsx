import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Feed from '../pages/Feed/'

export default () => {
    return (
        <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/feed" component={Feed} />
            <Redirect from="/" to="/signin" />
        </Switch>
    )
}