import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Arena from '../arena/arena';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeprovider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Home from "../home/home";

class App extends Component {
  render() {
    return (
        <Router>
            <MuiThemeprovider>
              <div className="App">
                  <AppBar title="Sort Viz" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                  <Route path="/" exact={true} render={() => (
                      <div className="App-header">
                          <img src={logo} className="App-logo" alt="logo" />
                          <h2>Welcome to Sort Visualizer</h2>
                      </div>
                  )}/>
                <Route path="/arena" component={Arena}/>
                <Route path="/" exact={true} component={Home}/>
              </div>
            </MuiThemeprovider>
        </Router>
    );
  }
}

export default App;
