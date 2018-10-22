import React ,{ Component }from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import Main from './src/router/BottomTab'
import store from './src/store/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}

