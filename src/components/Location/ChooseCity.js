import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

class ChooseCity extends Component {
    static navigationOptions = {
        title: '请选择所在城市',
    };

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {}

    render() {
        return(<View style = { styles.container }>

            </View>
        );
    }
}

const styles = StyleSheet.create({

})

export default ChooseCity;