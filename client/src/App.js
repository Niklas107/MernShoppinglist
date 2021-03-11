import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Shopping from './components/Pages/Shopping';
import Error from './components/Pages/Error';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from './components/AppNavbar'


class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <BrowserRouter>

          <AppNavbar />

          <div className="content">
            <div className="routes">
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/shopping" component={Shopping} />
                <Route component={Error} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
