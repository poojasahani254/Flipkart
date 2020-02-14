import Api from '../Service/Api';
import {GETPRODUCT} from '../Action/types';
const GetProductUrl = '/products/getallProducts';
export const GetAllProduct = data => {
  return dispatch => {
    return Api(GetProductUrl, data, 'post')
      .then(response => {
        if (response.status == 200) {
          // dispatch({
          //   type: GETPRODUCT,
          //   payload: response.data,
          // });
          return Promise.resolve(response.data);
        } else {
          return Promise.resolve(false);
        }
      })
      .catch(err => {
        return Promise.resolve(err);
      });
  };
};
