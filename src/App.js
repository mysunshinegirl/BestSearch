import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom"
import './App.css'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/index'

import history from './utils/history'

import HomePage from './containers/HomePage/Loadable'
import SearchPage from './containers/SearchPage/Loadable'

/**
 *  类组件使用intl必须用injectIntl包裹产生高阶组件
 *  Hooks函数组件可以使用hooks钩子useIntl直接使用
 *
 */
function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <PersistGate loading={null} persistor={persistor}>
          <div>
            <Switch>
              <Route exact path="/search/:keyword" component={SearchPage} />
              <Route path="/" component={HomePage} />
            </Switch>
          </div>
        </PersistGate>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
