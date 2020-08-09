import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import Login from '../screens/Login'
import Feed from '../screens/Feed'

export default () => {
    return(
        <Switch>
            <Route path="/signin" component={Login}/>
            <Route path="/signup" component={Login}/>
            <Route path="/feed" component={Feed}/>
            <Redirect from="/" to="/signin" />
        </Switch>
    )
}