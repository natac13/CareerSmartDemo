import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css';
import './scss/setup.scss';

import App from './containers/App/';

import configureStore from './store/configureStore';
const store = configureStore();

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


import Immutable from 'immutable';
import installDevTools from 'immutable-devtools';
installDevTools(Immutable);

const rootElement = document.getElementById('root');

render((
    <Provider store={store} >
        <App />
    </Provider>
), rootElement);
