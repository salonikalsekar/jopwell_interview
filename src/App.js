import React from 'react';
import './css/style.css'

import Header from './components/Header';
import Github from './containers/functionality';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Github />
        </main>
      </div>
    )
  }
}

export default App;
