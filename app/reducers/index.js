/*=================================
=            Polyfills            =
=================================*/

'use strict';
if (typeof Object.assign != 'function') {
    (function () {
        Object.assign = function (target) {
            if (target === undefined || target === null) {
                throw new TypeError('Cannot convert undefined or null to object');
            }

            var output = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var source = arguments[index];
                if (source !== undefined && source !== null) {
                    for (var nextKey in source) {
                        if (source.hasOwnProperty(nextKey)) {
                            output[nextKey] = source[nextKey];
                        }
                    }
                }
            }
            return output;
        };
    })();
}

/*=====  End of Polyfills  ======*/

import { combineReducers } from 'redux';
import { routeReducer }    from 'redux-simple-router';
import { reducer as formReducer } from 'redux-form';
import { mergeAll } from 'ramda';

import questionAnswers from './questions';
import users from './users';

const rootReducer = combineReducers(mergeAll([
    {},
    {
        questionAnswers,
        users
    },
    {
        routing: routeReducer,
        form: formReducer
    }

]));


export default rootReducer;