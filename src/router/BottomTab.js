import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Stack from './stack'
import Main from '../View/Main/Main'
import Order from '../View/Order/Order'
import Mine from '../View/Mine/Mine'

import utils from '../util/util'
export default createBottomTabNavigator({
    Home: {
        screen:Stack,
    },
    Order: {
        screen:Order,
    },
    Mine: {
        screen:Mine,
    }
}, {
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            // console.log(navigation.state)
            const { routeName } = navigation.state;
            let iconName = utils.mapBottomIcons(routeName, focused)
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
            return <Ionicons name = { iconName } size = { horizontal ? 20 : 25 } color = { tintColor }/>;
        },
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    }
});
