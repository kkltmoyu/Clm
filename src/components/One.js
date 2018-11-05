import React,{Component} from 'react'
import {Button,View} from 'react-native'
class One extends React.Component {
  static navigationOptions = {
    title: 'One1',
    //单个页面无页眉
    header: null,
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./chats-icon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  };

  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('Two')}
          title="Go to Two"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Login')}
          title="Go to Login"
        />
      </View>
    );
  }
}

export default One;