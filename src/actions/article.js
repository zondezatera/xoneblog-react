import axios from 'axios';
import { FETCH_ARTICLES } from './constants';

export const fetchArticleContent = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  return (dispatch) => {
    return axios.get(url)
      .then(res => {
        dispatch(receiveArticleContent(res.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

function receiveArticleContent(json) {
  return {
    type: FETCH_ARTICLES,
    payload: json
  }
}
