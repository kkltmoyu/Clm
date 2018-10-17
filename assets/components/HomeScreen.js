import React,{ Component } from 'react'; 
import {
    AppRegistry,
    Text,
    View,
    Button
} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',//在导航中显示的标题内容
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Chat',{user:'111'})}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}