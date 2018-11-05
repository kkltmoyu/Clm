import React, {Component} from 'react';

import {
    Text,
    View,
    Button
} from 'react-native';
export default class Mine extends Component {
    static navigationOptions = {
        title: 'Mine12',
        // drawerIcon: ({ tintColor }) => (
        //   <Image
        //     source={require('./chats-icon.png')}
        //     style={[styles.icon, {tintColor: tintColor}]}
        //   />
        // ),
      };
   render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Mine</Text>
            </View>
        );
    }
}