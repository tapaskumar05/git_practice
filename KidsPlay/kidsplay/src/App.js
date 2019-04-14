import React, { Component } from 'react';
import './App.css';
import { playBtnClickSound } from './helpers/playAudio';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Route path="/" exact strict render = {
            () => {
              return (<h1> Kids Play </h1>);
            }
          } />
          <Route path="/about" exact strict render = {
            () => {
              return (<h1> Kids Play About Us Page </h1>);
            }
          } />
          <Route path="/user/:username" exact strict component={User} />
          <button onClick={this.buttonClicked}>Click Me</button>
        </div>
      </Router>
    );
  }
}

export default App;
