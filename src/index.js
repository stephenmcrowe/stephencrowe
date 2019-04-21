import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div>
                Hello!
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('main'));
