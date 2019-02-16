import React, { Component } from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage.js';
import AppLayout from './AppLayout.js';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <WelcomeMessage />
      </AppLayout>
    );
  }
}

export default App;
