import React             from 'react';
import { render }        from 'react-dom';
// import Router            from 'react-router';
import { Provider }      from 'react-redux';
// import routes            from './config/routes';

import './scss/setup.scss';


import App from './containers/App/';

import configureStore from './store/configureStore';
const store = configureStore();

/*===============================================
=            Material-ui requirement            =
===============================================*/

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

/*=====  End of Material-ui requirement  ======*/


/*===========================================
=            Immutable Dev tools            =
===========================================*/

import Immutable from 'immutable';
import installDevTools from 'immutable-devtools';
installDevTools(Immutable);

/*=====  End of Immutable Dev tools  ======*/


const rootElement = document.getElementById('root');
// import { history } from './store/configureStore';


// render((
//     <Provider store={store}>
//         <Router history={history} >
//             {routes}
//         </Router>
//     </Provider>
// ), rootElement);

render((
    <Provider store={store} >
        <App />
    </Provider>
), rootElement);
