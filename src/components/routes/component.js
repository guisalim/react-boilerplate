import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Component = () =>
    <Switch>
        <Route render={() => <h1>Not Found</h1>} />
    </Switch>

export default Component