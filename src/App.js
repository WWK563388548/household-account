import React, { Component, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Create from './components/Create/Create'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/" exact component={Home} />
          <Route path="/create" component={Create} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
