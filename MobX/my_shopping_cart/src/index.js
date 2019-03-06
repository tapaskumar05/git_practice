import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import CartStore from './stores/CartStore';

const Root = (
    <Provider CartStore={CartStore}>
        <App/>
    </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));
serviceWorker.unregister();
