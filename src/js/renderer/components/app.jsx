/* @flow */
import React, {Component} from 'react';
import { hot } from 'react-hot-loader';
import { Hello,Home,About,Topics,Parent } from 'Js/renderer/components/index';
import {Route, Link, Switch} from 'react-router-dom';

type Props = {};

class App extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        );
    }
}

export default hot(module)(App);
