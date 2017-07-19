import React, { Component } from 'react';
import Header from './train_header';
import TrainList from './train_list';
import '../style/style.scss';

export default class App extends Component {
  /*
  App component holds all of child components of the app.
  App component should have a header and list of trains */
  render() {
    return (
      <div>
        <Header />
        <TrainList />
      </div>
    );
  }
}
