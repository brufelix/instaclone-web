import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'

export default () => {
    return (
        <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/home" component={Home} />
            <Redirect from="/" to="/signin" />
        </Switch>
    )
}