/* @flow */
import React, {Component} from 'react';
import { hot } from 'react-hot-loader';
import moment from 'moment';
import Styles from 'Scss/components/clock';

type Props = {};

type State = {
    currentTime: string,
};

class Home extends Component<Props, State> {
    state: State;

    constructor(props: Props) {
        super(props);
        this.state = {currentTime: this.getCurrentTime()};
        this.startClock();
    }

    getCurrentTime(): string {
        let now: string = moment().format('HH:mm:ss');
        return now;
    }

    updateState(): void {
        this.setState({currentTime: this.getCurrentTime()});
    }

    startClock(): void {
        setInterval(() => this.updateState(), 1000);
    }

    render() {
        return (
            <div className={Styles.clock}>{this.state.currentTime}</div>
        );
    }
}

export default hot(module)(Home);
