import React from 'react';
import { createStackNavigator } from 'react-navigation';
import One from '../components/One'
import Two from '../components/Two'
import Main from '../components/Main/Main'


export default createStackNavigator({
	Main:{
		screen:Main
	},
	One: {
	    screen: One
	},
    Two: {
    	screen: Two
    },
},
  {
     header:null
  }
);
