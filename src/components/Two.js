import React,{Component} from 'react'
import {Button} from 'react-native'
class Two extends React.Component {
  static navigationOptions = {
    title: 'Two1',
    //单个页面无页眉
    header: null,
    //禁用返回header
    headerBackTitle:null,
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
        onPress={() => this.props.navigation.goBack()}
        title="Go back One"
      />
    );
  }
}

export default Two;