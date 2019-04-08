import React, { Component, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Home />
      </Fragment>
    );
  }
}

export default App;
