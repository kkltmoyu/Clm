import React from 'react';
import { createStackNavigator } from 'react-navigation';
import BottomTabRouter from '../router/bottomTab'
import Login from '../View/Login/Login'
import LocationRouter from './location'

export default createStackNavigator({
	BottomTab:{
		screen: BottomTabRouter
	},
  Location:{
    screen:LocationRouter
  },
	Login: {
	  screen: Login
	},
},
  {
  	//Login
    headerMode:'none',
    initialRouteName: 'Location',
    //card or modal,安卓无影响
    // mode: 'card',
  }
);
