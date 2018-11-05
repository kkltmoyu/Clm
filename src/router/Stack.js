import React from 'react';
import { createStackNavigator } from 'react-navigation';
import One from '../components/One'
import Two from '../components/Two'
import Main from '../View/Main/Main'


export default createStackNavigator({
	Main:{
		screen: Main
	},
	One: {
	  screen: One
	},
  Two: {
    screen: Two
  },
},
  {
  	//整个stack路由无header
    //headerMode:'none',
    initialRouteName: 'Main',
    // headerBackTitleVisible:false,
    //card or modal,安卓无影响
    // mode: 'modal',
  }
);
