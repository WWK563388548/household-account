import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Mock data
const items = [
  {
    "id": 1,
    "title": "去日本旅游",
    "price": 200,
    "date": "2019-04-01",
    "category": {
      "id": "1",
      "name": "旅行",
      "type": "outcome",
    }
  },
];

class App extends Component {
  render() {
    return (
      <div>
        Project initialized
      </div>
    );
  }
}

export default App;
