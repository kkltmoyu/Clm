import React from 'react';
import { createStackNavigator } from 'react-navigation';
import BottomTab from '../router/bottomTab'
import Login from '../View/Login/Login'


export default createStackNavigator({
	BottomTab:{
		screen: BottomTab
	},
	Login: {
	  screen: Login
	},
},
  {
  	//Login
    //headerMode:'none',
    initialRouteName: 'BottomTab',
    //card or modal,安卓无影响
    // mode: 'modal',
  }
);
