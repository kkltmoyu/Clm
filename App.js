import React ,{ Component }from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

// import axios from 'axios';

import Root from './src/router/index';
// import Stack from './src/router/Stack'
import store from './src/store/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      	{/*<View>*/}
	        <Root/>
        {/*</View>*/}
      </Provider>
    );
  }
}

