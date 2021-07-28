import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import './index.css';
import { ABC } from './templates/ABC';
import { App } from './templates/Home/index';
import { Page404 } from './templates/Page404';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
      <Switch>
        <Route path="/abc/:slug?" component={ABC} />
        <Route path="/" component={App} exact />
        <Route path="*" component={Page404} exact />
        <App />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
