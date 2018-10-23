import React,{Component} from 'react'
import {Button} from 'react-native'
class Two extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Two',
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