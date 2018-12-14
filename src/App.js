import React, { Component } from 'react';
import Header from './components/Header'
import Create from './components/Create'
import Contacts from './components/Contacts'
import View from './components/View'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" component={Contacts} />
        <Route exact path="/add" component={Create} />
        <Route exact path="/view/:id" component={View} />
        <Route exact path="/edit/:id" component={Create} />
        <Route exact path="/delete/:id" component={Contacts} />
      </div>
      </Router>
    );
  }
}

export default App;
