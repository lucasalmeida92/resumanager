import React, { Component } from 'react';
import Header from './components/Header';
import PageContent from './components/PageContent';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PageContent>
          <p>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </PageContent>
      </div>
    );
  }
}

export default App;
