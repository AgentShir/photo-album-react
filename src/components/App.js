import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import logo from '../logo.svg';
import '../styles/App.css';

import BaseLayout from '../components/BaseLayout';
import Home from '../components/Home';
import Album1 from '../components/Album1';
import Album2 from '../components/Album2';
import Album3 from '../components/Album3';
import Album4 from '../components/Album4';
import Album5 from '../components/Album5';
import Album6 from '../components/Album6';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/album1" component={Album1} />
            <Route path="/album2" component={Album2} />
            <Route path="/album3" component={Album3} />
            <Route path="/album4" component={Album4} />
            <Route path="/album5" component={Album5} />
            <Route path="/album6" component={Album6} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
