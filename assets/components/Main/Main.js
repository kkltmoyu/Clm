import React,{ Component } from 'react'; 
import {
    AppRegistry,
    Text,
    View,
    Button
} from 'react-native';

export default class Main extends React.Component {
    render() {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Main111</Text>
            <Button onPress={()=>{
              this.props.navigation.navigate('Order')
            }} title='Go to order'></Button>
          </View>
        );
    }
}