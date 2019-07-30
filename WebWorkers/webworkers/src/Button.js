import React from 'react';
import WebWorker from './WebWorker';
import worker from './worker';

class Button extends React.Component {
    componentDidMount() {
        this.worker = new WebWorker(worker);
        this.worker.onmessage = (event) => {
          this.handleWorker(event);
        };
    }
    handleWorker = event => {
        console.log(event.data);
    };
    btnClick = (e) => {
        this.worker.postMessage({
            value: 2
        });
    }
    render() {
        return <button onClick={this.btnClick}>Click Me</button>
    }
}

export default Button;
