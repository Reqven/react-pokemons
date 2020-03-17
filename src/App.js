import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Pokemon from './pages/Pokemon'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/pokemon/:name" component={Pokemon}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
