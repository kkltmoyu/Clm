import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements'

class Location extends Component {
    // static navigationOptions = {
        // headerTitle: '请选择收货地址',
        // headerBackTitle:null
        // header: null,
    // };

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {}

    render() {
        return(
            <View style = { styles.container }>
                <View style={styles.selectContainer}>
                    <Button title='BUTTON' />
                    <Text>hahahha</Text>
                </View>
                <View style={styles.addressList}>
                    <Button title='BUTTON' />
                    <Text>hahahha</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // alignItems:center;
    },
    selectContainer:{
        flex:1,
        width:200,
        flexDirection: 'row',
        backgroundColor: 'powderblue',
    },
    addressList:{
        flex:2,
        flexDirection: 'row',
        backgroundColor: 'red',
    }
})

export default Location;
