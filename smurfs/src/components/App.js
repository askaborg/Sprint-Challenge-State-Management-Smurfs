import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './App.css'

import { smurfReducer } from '../reducers/SmurfReducer'
import Smurfs from './Smurfs'
import SmurfForm from './SmurfForm'

const store = createStore(smurfReducer, applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
          <Smurfs />
          <SmurfForm />
        </div>
      </Provider>
    )
  }
}

export default App
