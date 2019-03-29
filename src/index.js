import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/smtech.css';

import Header from './components/Header';

import routes from './routes';

const App = () => (
  <div className="wrapper">
    <Header />
    <main>
      <BrowserRouter>
        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </main>
    <footer />
  </div>
);

ReactDOM.render(<App />, global.document.getElementById('root'));
