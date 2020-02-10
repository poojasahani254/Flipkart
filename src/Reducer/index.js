import {combineReducers} from 'redux';
import Login from '../Reducer/LoginReducer';
import Category from '../Reducer/CategoryReducer';

const RootReducers = combineReducers({
  LoginReducer: Login,
  CategoryReducer: Category,
});

export default RootReducers;
