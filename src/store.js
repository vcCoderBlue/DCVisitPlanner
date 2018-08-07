import { createStore, combineReducers } from 'redux';

import link from './reducers/linkReducer';

export default createStore(
  combineReducers({
    link
  }),
{},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);
