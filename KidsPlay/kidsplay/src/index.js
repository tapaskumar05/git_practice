import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import KidsPlayStore from './stores/KidsPlayStore';

const location = window.location;

const Root = (
    <Provider KidsPlayStore={KidsPlayStore} location={location}>
        <App />
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
serviceWorker.unregister();
