/* @flow */
import React from 'react';
import { render } from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import { App } from 'Js/renderer/components/index';

class Root {
    targetElement: Object;

    constructor(targetElement: Object) {
        this.targetElement = targetElement;
        if (targetElement) {
            this.renderView();
        }
    }

    renderView(): void {
        render((
            <Router>
                <App />
            </Router>
        ), this.targetElement);
    }
}

export default Root;
