import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Button,SearchBar } from 'react-native-elements'
import { updateUserCity } from '../../store/actions/actions';
import { locateSketchy } from '../../service/getData'

class Location extends Component {
    // static navigationOptions = {
        // headerTitle: '请选择收货地址',
        // headerBackTitle:null
        // header: null,
    // };

    constructor(props) {
        super(props);
        this.state = {
            currentCityInfo : {},
            inputDetailAddress:'',
            currentAddress:'currentcurrentAddress',
            addressList:[]
        }
    }
    makeAddressInfo = () =>{
        let address = []
        for(let i = 0;i<10;i++){
            address.push({
                address:`address${i}`,
                userName:`user${i}`,
                mobile:`mobile${i}`
            })
        }
        return address
    }
    componentDidMount() {
        this.getCitySketch()
        const address = this.makeAddressInfo()
        this.setState({
            addressList:address
        })
    }
    inputChange = (value) =>{
        this.setState({
            inputDetailAddress:value
        })
    }
    getCitySketch = () =>{
        locateSketchy().then((res) => {
            if(res.code === 500){
                console.log('定位失败')
                this.props.updateUserCity({
                    city:{
                        name:'北京'
                    }
                })
            }
            else if(res.code === 200){
                const city = res.data.city
                this.props.updateUserCity({
                    city:city
                })
            }
        }).catch((e)=>{
            console.log('获取当前城市失败')
            this.props.updateUserCity({
                city: {
                    name:'北京'
                }
            })
        })
    }
    chooseCity = () => {
        this.props.navigation.navigate('ChooseCity')
    }
    chooseAddress = () => {
        this.props.navigation.navigate('ChooseAddress')
    }
    render() {
        // let currentCity = this.state.currentCityInfo.name ? this.state.currentCityInfo.name : ''
        let addressList = this.state.addressList.map((item) =><View key={item.address} style={styles.listContainer}><Text style={styles.addressTitle}>{item.address}</Text><View style={styles.addressContact}><Text style={styles.addressUsername}>{item.userName}</Text><Text style={styles.addressMobile}>{item.mobile}</Text></View></View>)
        return(
            <View style = { styles.container }>
                <View style={styles.selectWrapper}>
                    <Button style={styles.cityBtn} title={this.props.user.locationCity.name} rightIcon={{name: 'arrow-drop-down'}} onPress={this.chooseCity}/>
                    <SearchBar containerStyle={styles.searchBarWrapper}
                        onChangeText={this.inputChange}
                        placeholder='小区/写字楼/学校 等'
                        value={this.state.inputDetailAddress} />
                </View>
                <View style={styles.currentLocationWrapper}>
                    <Text style={styles.title}>当前定位</Text>
                    <Text style={styles.currentPosition}>{this.state.currentAddress}</Text>
                </View>
                <View style={styles.addressList}>
                    <Text style={styles.title}>收货地址</Text>
                    <ScrollView>
                       {addressList}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ffffff'
    },
    selectWrapper:{
        flex:1,
        alignItems:'center',
        flexDirection: 'row',
        paddingRight:10,
        borderBottomColor:'#EEEEE0',
        borderBottomWidth:1,
    },
    cityBtn:{
        flex:1,
    },
    searchBarWrapper:{
        flex:4,
    },
    currentLocationWrapper:{
        flex:0.7,
        paddingLeft:10,
        paddingTop:5,
        borderBottomColor:'#EEEEE0',
        borderBottomWidth:1,
        justifyContent:'space-around',
    },
    addressList:{
        flex:5,
        paddingLeft:10,
        paddingTop:5,
    },
    title:{
        color:'rgb(241, 243, 244)',
    },
    addressTitle:{
        fontWeight:'bold'
    },
    addressContact:{
        flex: 1,
        flexDirection:'row',
    },
    addressMobile:{
        color:'rgba(0, 0, 0,0.7)',
        marginLeft:15,
    },
    addressUsername:{
        color:'rgba(0, 0, 0,0.7)',
    },
    currentPosition:{
        paddingLeft:10
    },
    listContainer:{
        paddingTop:5,
        paddingLeft:10,
        paddingBottom:5,
        borderBottomColor:'#EEEEE0',
        borderBottomWidth:1,
    }
})

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => {
    return {
        updateUserCity: bindActionCreators(updateUserCity, dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Location);
