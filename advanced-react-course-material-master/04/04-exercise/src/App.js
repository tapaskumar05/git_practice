
/*
Create a `withStorage` higher order component that manages saving and retrieving
the `sidebarIsOpen` state to local storage
*/

import './index.css'
import React from 'react'
import MenuIcon from 'react-icons/lib/md/menu'
import { set, get, subscribe } from './local-storage'

const withStorage = (key, default_) => (Comp) => (
  class WithStorage extends React.Component {
    state = {
      [key]: get(key, default_)
    }

    componentDidMount() {
      this.unsubscribe = subscribe(() => {
        this.setState({
          sidebarIsOpen: get(key)
        })
      })
    }

    componentWillUnmount() {
      this.unsubscribe()
    }

    setStorage = (val) => {
      set(key, val)
    }
    render() {
      return <Comp {...this.state} setStorage={this.setStorage}/>
    }
  }
)
class App extends React.Component {

  render() {
    const { sidebarIsOpen, setStorage } = this.props
    return (
      <div className="app">
        <header>
          <button
            className="sidebar-toggle"
            title="Toggle menu"
            onClick={() => {
              setStorage(!sidebarIsOpen)
            }}
          >
            <MenuIcon/>
          </button>
        </header>

        <div className="container">
          <aside className={sidebarIsOpen ? 'open' : 'closed'}/>
          <main/>
        </div>
      </div>
    )
  }
}

export default withStorage('sidebarIsOpen', true)(App)
