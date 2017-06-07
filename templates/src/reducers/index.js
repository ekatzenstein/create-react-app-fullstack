import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import demo from './demo';

const Reducers = combineReducers({
    demo,
    routing: routerReducer
});

export default Reducers;
