import React,{Component} from 'react'
import {Button} from 'react-native'
class One extends React.Component {
  static navigationOptions = {
    drawerLabel: 'One',
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

export default One;