import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePageLayout from './components/HomePage'
import Main from './components/Main';

export default class App extends Component {
  render() {  
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ HomePageLayout } />
          <Route path='/' component={ Main } />
        </Switch>
      </div>
    );
  }
}
