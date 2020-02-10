import RootReducers from '../Reducer/index';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
export default createStore(RootReducers, applyMiddleware(thunk));
// export default createStore(RootReducers);
