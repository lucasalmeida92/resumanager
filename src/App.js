import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import PageContent from './components/PageContent';
import ResumesPage from './containers/ResumesPage';
import CreateResumePage from './containers/CreateResumePage';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <PageContent>
            <Switch>
              <Route exact path="/" component={ResumesPage} />
              <Route exact path="/create-resume" component={CreateResumePage} />
              <Route component={ResumesPage} />
            </Switch>
          </PageContent>
        </div>
      </Router>
    );
  }
}

export default App;
