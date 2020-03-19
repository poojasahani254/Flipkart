import {GETCATEGORY} from '../Action/types';
import Api from '../Service/Api';
const GetCategoryUrl = '/GetAllCategory';
const GetSubCategoryUrl = '/Category/GetSubCategory';
const GetChildSubCategoryUrl = '/Category/GetChildSubCategory';
export const GETCATEGORYData = () => {
  return dispatch => {
    return Api(GetCategoryUrl, '', 'get')
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: GETCATEGORY,
            payload: response.data,
          });
          return Promise.resolve(response.data);
        } else {
          return Promise.resolve(false);
        }
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };
};

export const GetSubCategory = data => {
  return dispatch => {
    return Api(GetSubCategoryUrl, data, 'post')
      .then(response => {
        if (response.status == 200) {
          return Promise.resolve(response);
        }
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };
};

export const GetChildSubCategory = () => {
  return dispatch => {
    return Api(GetChildSubCategoryUrl, '', 'get')
      .then(response => {
        if (response.status == 200) {
          return Promise.resolve(response);
        }
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };
};
