import RootReducers from '../Reducer/index';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  RootReducers,
  composeEnhancers(applyMiddleware(thunk)),
);
// export default createStore(RootReducers);
