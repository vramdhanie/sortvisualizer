import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Arena from '../arena/arena';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
              <Route path="/" exact={true} render={() => (
                  <div className="App-header">
                      <img src={logo} className="App-logo" alt="logo" />
                      <h2>Welcome to Sort Visualizer</h2>
                  </div>
              )}/>
            <Route path="/arena" component={Arena}/>
            <Route path="/home" render={() => (
                <div>
                    Welcome to Sort Visualizer
                </div>
            )}/>
          </div>
        </Router>
    );
  }
}

export default App;
