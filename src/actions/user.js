import axios from 'axios';
import { FETCH_USERS } from './constants';

export const fetchUserData = () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  return (dispatch) => {
    return axios.get(url)
      .then(res => {
        dispatch(receiveUserData(res.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

function receiveUserData(json) {
  return {
    type: FETCH_USERS,
    payload: json
  }
}