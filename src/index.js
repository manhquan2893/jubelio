import ReactDOM from 'react-dom'
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'

import Login from 'components/Login'
import Register from 'components/Register/Register'
import Sale from 'components/Sales/Sale/Sale'
import App from './App'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'antd/dist/antd.css';
import './assets/variables.scss';
import 'App.css'

const store = configureStore(/* provide initial state if any */)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" render={() => (<App /> )} />
          <Route path="/sale" render={() => (<Sale /> )} />
          <Route path="/login" render={() => (<Login /> )} />
          <Route path="/register" render={() => (<Register /> )} />
        </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

