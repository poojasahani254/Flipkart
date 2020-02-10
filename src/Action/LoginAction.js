import {GETMATCHDATA} from './types';
import Api from '../Service/Api';
const getMatchedDataurl = '/customer/findcustomer';
const RegisterUSer = '/customer/registeremployee';
const UpdateCustomerUrl = '/customer/updateCustomer/';
const UpdateCustomerEmailUrl = '/customer/updateCustomerEmail/';
const SetPasswordUrl = '/customer/setPassword/';

export const GetMatchedData = data => {
  return dispatch => {
    return Api(getMatchedDataurl, data, 'post')
      .then(response => {
        if (response.status == 200) {
          dispatch({
            type: GETMATCHDATA,
            payload: response.data,
          });
          return Promise.resolve(response.data);
        }
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };
};

export const RegisterUser = data => {
  return dispatch => {
    return Api(RegisterUSer, data, 'post')
      .then(response => {
        if (response == 200) {
          return Promise.resolve(response.data);
        }
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };
};

export const UpdateCustomer = data => {
  return dispatch => {
    return Api(UpdateCustomerUrl, data, 'patch')
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

export const UpdateCustomerEmail = data => {
  return dispatch => {
    return Api(UpdateCustomerEmailUrl, data, 'patch')
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

export const setPassword = data => {
  return dispatch => {
    return Api(SetPasswordUrl, data, 'patch')
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
