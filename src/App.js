import React, { Component } from 'react';
import './css/styling.css';

import Header from './components/Header';
import Functionality from './container/functionality';



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Functionality />
        </main>
      </div>
    );
  }
}

export default App;
