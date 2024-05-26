import {createStore} from 'react-redux';

import {reducers} from './reducers';

const store = createStore(reducers, {});

export default store;