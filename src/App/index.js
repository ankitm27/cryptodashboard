import React, { Component } from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage.js';
import AppLayout from './AppLayout.js';
import AppBar from './AppBar.js';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppBar />
        <WelcomeMessage />
      </AppLayout>
    );
  }
}

export default App;
