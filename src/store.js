import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import allReducers from './reducers';

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

const middleware = [thunk];

export default createStore(allReducers, composeEnhancers(applyMiddleware(...middleware)));
