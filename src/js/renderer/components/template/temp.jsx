/* @flow */
import React, {Component} from 'react';

/* enable hot reload */
import { hot } from 'react-hot-loader';

/*required*/
type Props = {
    /* Your Props properties*/
};

/*optional*/
type State = {
    /* Your State properties */
};

class Temp extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div>Write your Component here.</div>
        );
    }
}

/* enable hot reload */
export default hot(module)(Temp);
