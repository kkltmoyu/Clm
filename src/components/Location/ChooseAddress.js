import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SectionList,
} from 'react-native';
import { Button,SearchBar } from 'react-native-elements'
import { getCitiesByChar } from '../../service/getData'

class ChooseAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.getAllCities()
    }
    returnPage(){
        this.props.navigation.navigate('Location')
    }

    getAllCities(){
        
    }

    render() {
        return(
            <View style = { styles.chooseAddressContainer }>
                <View style={styles.header}>
                    <SearchBar containerStyle={styles.searchBarInput} placeholder='输入城市名' value={this.state.inputCity}></SearchBar>
                    <Button style={styles.cancelBtn} title='取消' onPress={this.returnPage}/>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    chooseAddressContainer:{
        flex: 1,
        backgroundColor:'#ffffff',
    },
})

export default ChooseAddress;
