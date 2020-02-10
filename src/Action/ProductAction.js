import Api from '../Service/Api';
import {GETPRODUCT} from '../Action/types';
const GetProductUrl = '/products/getallProducts';
export const GetAllProduct = data => {
  return dispatch => {
    return Api(GetProductUrl, data, 'post')
      .then(response => {
        if (response.data.status == 200) {
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
