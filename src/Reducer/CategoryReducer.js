import {GETCATEGORY} from '../Action/types';
import {CategoryState} from '../state/Intialstate';

const CategoryReducer = (state = CategoryState, action) => {
  switch (action.type) {
    case GETCATEGORY:
      return {
        ...state,
        CategoryData: action.payload,
      };
    default:
      return state;
  }
};
export default CategoryReducer;
