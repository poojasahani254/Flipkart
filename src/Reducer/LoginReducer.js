import {GETMATCHDATA} from '../Action/types';
import {LoginState} from '../state/Intialstate';
const LoginReducer = (state = LoginState, action) => {
  switch (action.type) {
    case GETMATCHDATA:
      return {
        getmatchdata: action.payload,
      };
    default:
      return state;
  }
};
export default LoginReducer;
