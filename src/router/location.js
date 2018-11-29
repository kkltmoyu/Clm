import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Location from '../components/Location/Location'
import ChooseCity from '../components/Location/ChooseCity'
import ChooseAddress from '../components/Location/ChooseAddress'

export default createStackNavigator({
	Location:{
		screen: Location,
    navigationOptions: () => ({
      title: '请选择收货地址',
    }),
	},
	ChooseCity: {
	  screen: ChooseCity,
    navigationOptions: () => ({
      // headerMode:'none',
      header: null,
      // title: '请选择所在城市',
    }),
	},
  ChooseAddress:{
    screen: ChooseAddress,
    navigationOptions: () => ({
      title: '请选择收货地址',
    }),
  },
},
  {
  	//整个stack路由无header
    headerMode:'screen',
    initialRouteName: 'ChooseCity',
    // headerBackTitleVisible:false,
  }
);
