import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import './index.css';
import { ABC } from './templates/ABC';
import { App } from './templates/Home/index';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/abc" exact component={ABC} />
        <App />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
