import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Location from '../components/Location/Location'
import ChooseCity from '../components/Location/ChooseCity'

export default createStackNavigator({
	Location:{
		screen: Location,
    navigationOptions: () => ({
      title: '请选择收货地址',
    }),
	},
	ChooseCity: {
	  screen: ChooseCity
	},
},
  {
  	//整个stack路由无header
    headerMode:'screen',
    initialRouteName: 'Location',
    // headerBackTitleVisible:false,
  }
);
