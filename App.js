import React, {Component} from 'react';
import Drawer from './src/Navigation/GuestDrawer';
import {Provider} from 'react-redux';
import configstore from './src/Store/config';
export default class App extends Component {
  render() {
    return (
      <Provider store={configstore}>
        <Drawer />
      </Provider>
    );
  }
}
