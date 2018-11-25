import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { Button,SearchBar } from 'react-native-elements'
import {locateSketchy} from '../../service/getData'

class Location extends Component {
    // static navigationOptions = {
        // headerTitle: '请选择收货地址',
        // headerBackTitle:null
        // header: null,
    // };

    constructor(props) {
        super(props);
        this.state = {
            currentCity :'',
            inputDetailAddress:''
        }
        this.inputChange = this.inputChange.bind(this)
        this.getCitySketch = this.getCitySketch.bind(this)
    }

    componentDidMount() {
        // this.getCitySketch()
    }
    inputChange(value){
        this.setState({
            inputDetailAddress:value
        })
        alert(value)
    }
    getCitySketch(){
        locateSketchy().then((res) => {
            if(res.code === 500){
                console.log('定位失败')
                this.setState({
                    currentCity:'北京'
                })
            }
            else if(res.code === 200){
                const city = res.addressDetail.city
                this.setState({
                    currentCity:city
                })
            }
        }).catch((e)=>{
            alert(e)
        })
    }
    render() {
        return(
            <View style = { styles.container }>
                <View style={styles.selectWrapper}>
                    <Button style={styles.cityBtn} title={this.state.currentCity} rightIcon={{name: 'arrow-drop-down'}} onPress={this.getCitySketch}/>
                    <SearchBar containerStyle={styles.searchBarWrapper}
                        onChangeText={this.inputChange}
                        placeholder='小区/写字楼/学校 等'
                        value={this.state.inputDetailAddress} />
                </View>
                <View style={styles.currentLocationWrapper}>
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
        backgroundColor:'#ffffff'
        // alignItems:center;
    },
    selectWrapper:{
        flex:1,
        width:'100%',
        alignItems:'center',
        flexDirection: 'row',
        paddingRight:10,
        borderBottomColor:'#EEEEE0'
    },
    cityBtn:{
        flex:1,
    },
    searchBarWrapper:{
        flex:4,
    },
    currentLocationWrapper:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: 'powderblue',
    },
    addressList:{
        flex:5,
        flexDirection: 'row',
        backgroundColor: 'red',
    }
})

export default Location;
