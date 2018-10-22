// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
// import HomeScreen from './assets/components/HomeScreen'
// import ChatScreen from './assets/components/ChatScreen'

// import {
//   StackNavigator,
// } from 'react-navigation';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// const App = StackNavigator({
//     Home: { screen: HomeScreen },
//     Chat: {
//         screen: ChatScreen
//     },
// });

// export default App;


import React from 'react';
import {
    StyleSheet,
    Button
} from 'react-native'
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


class MyHomeScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./assets/images/1.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            >
            </Image>
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./assets/images/2.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            >
            </Image>
        ),
    };

    render() {
        return (
            <Button transparent onPress={() => this.props.navigation.goBack()}
                title="Go back home">
              <Icon name='gitlab' size={20} color="#f00"/>
            </Button>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

const MyApp = TabNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#e91e63',
    },
});
export default MyApp;