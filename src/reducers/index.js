import { combineReducers }  from 'redux';
import { FETCH_ARTICLES, FETCH_USERS } from '../actions/constants'
function contentArticle(state = [], action) {
  switch (action.type) {
    case 'FETCH_ARTICLES':
      return action.payload
  
    default:
      return state;
  }
}

function userProfile(state = [], action) {
  switch (action.type) {
    case 'FETCH_USERS':
      return action.payload
  
    default:
      return state
  }
  
}

const blogApp = combineReducers({
  contentArticle,
  userProfile
})

export default blogApp
