import React, { Component } from 'react';
import './App.css';
import Productform from './components/Productform'
import Errorboundary from './components/Errorboundary';

class App extends Component {
  render() {
    return (
      <main className="mx-auto p-2">
        <h1>My Product Store</h1>
        <hr/>
        <Errorboundary>
          <Productform/>
        </Errorboundary>
      </main>
    );
  }
}

export default App;
