import React, { Component } from 'react';
import './App.css';
import { playBtnClickSound } from './helpers/playAudio';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import routes from './routes';
import { inject, observer } from '../../../MobX/my_shopping_cart/node_modules/mobx-react';
@inject('KidsPlayStore')
@observer
class App extends Component {
  constructor (props) {
    super (props);
  }
  buttonClicked = () => {
    playBtnClickSound();
  }
  render() {
    const currentProps = this.props;
    const { KidsPlayStore, location = window.location } = this.props;
    const { setCurrentDataSet } = KidsPlayStore;
    setCurrentDataSet(location);
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
                      <div className={`route-holder ${route.className || ''}`}>
                        <route.component {...props} {...currentProps} />
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
