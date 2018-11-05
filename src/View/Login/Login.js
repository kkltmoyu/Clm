import React,{Component} from 'react'
import {Button} from 'react-native'
class Login extends React.Component {
  static navigationOptions = {
    title: 'LoginModal',
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
      <Button
        onPress={() => this.props.navigation.navigate('Two')}
        title="Go to Two"
      />
    );
  }
}

export default Login;