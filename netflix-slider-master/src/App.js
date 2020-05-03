import React, { Component } from 'react';
import RootSlider from './components/NetflixSlider/RootSlider'

import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="app">
        <RootSlider></RootSlider>
      </div>
    );
  }
}

export default App;
