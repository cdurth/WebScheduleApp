import React from 'react'
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../components/Home'
import Counter from '../containers/Counter'
import { PrivateRoute } from './PrivateRoute';
import { LoginPage } from '../containers/Login';

export const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/counter" component={Counter} />
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/protected" />
        </Switch>
    </main>
)

//const App = connect(mapStateToProps, mapDispatchToProps)(routing);
export default Main;