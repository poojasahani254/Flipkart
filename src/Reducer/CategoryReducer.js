import {GETCATEGORY, GETPRODUCT} from '../Action/types';
import {CategoryState} from '../state/Intialstate';
const CategoryReducer = (state = CategoryState, action) => {
  debugger
  switch (action.type) {
    case GETCATEGORY:
      return {
        ...state,
        CategoryData: action.payload,
      };
    case GETPRODUCT:
      return {
        ...state,
        AllProductData: action.payload,
      };
    default:
      return state;
  }
};
export default CategoryReducer;
