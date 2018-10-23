import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Stack from './Stack'
import Main from '../components/Main/Main'
import Order from '../components/Order/Order'
import Mine from '../components/Mine/Mine'

import utils from '../util'
export default createBottomTabNavigator({
    Home: Stack,
    // Home:Main,
    Order: Order,
    Mine: Mine,
}, {
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            // console.log(navigation.state)
            const { routeName } = navigation.state;
            let iconName = utils.mapBottomIcons(routeName, focused)
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
            return <Ionicons name = { iconName }
            size = { horizontal ? 20 : 25 }
            color = { tintColor }
            />;
        },
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    }
});
