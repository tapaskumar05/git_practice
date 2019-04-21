import React, { Component } from 'react';
import './App.css';
import { playBtnClickSound } from './helpers/playAudio';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import routes from './routes';

const User = ({match}) => {
  return (<h1>Kids Play User {match.params.username}</h1>)
}

class App extends Component {
  buttonClicked = () => {
    playBtnClickSound();
  }
  render() {
    return (
      <Router>
        <div className="App">
          {routes.map(route => {
            return (
                <Route 
                  path = {route.path}
                  exact 
                  strict 
                  component = {props => {
                    return (
                      <div className="route-holder">
                        <route.component {...props} />
                      </div>
                    );
                  }}
                  key = {route.id}
                />
              )
          })}
        </div>
      </Router>
    );
  }
}

export default App;
