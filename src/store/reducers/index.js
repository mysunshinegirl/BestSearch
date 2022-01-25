import { combineReducers } from 'redux' //将多个reducer合成一个总的reducer
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

export default combineReducers({
  router: connectRouter(createBrowserHistory()),
});
