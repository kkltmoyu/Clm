import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TextInput
} from 'react-native';
import { Button,SearchBar } from 'react-native-elements'
import { getCitiesByChar } from '../../service/getData'
import { connect } from 'react-redux';
import { searchDestination } from '../../service/getData'
import { updateUserAddress } from '../../store/actions/actions';
import AddressItem from './AddressItem'
import { bindActionCreators } from 'redux'

class ChooseAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword:'王府井',
            addressList:[]
        }
    }

    componentDidMount() {
        // this.getAllCities()
    }
    returnPage = () =>{
        this.props.navigation.navigate('Location')
    }

    search = () =>{
        let params = ''
        if(this.props.user.locationCity.name.trim() !== '')
            params += 'region=' + this.props.user.locationCity.name + '&city_limit=true'

        if(this.state.keyword.trim()!== ''){
            params += '&query=' + this.state.keyword.trim()
        }
        
        searchDestination(params).then((res) => {
            if(res.code === 500){
                console.log('查询失败')
            }
            else if(res.code === 200){
                this.setState({
                    addressList: res.data.addressList
                })
            }
        }).catch((e)=>{
            console.log('获取当前地址列表')
            
        })
    }
    _keyExtractor = (item, index) => item.id;
    _renderItem = ({item}) => (
        <AddressItem
          item={item}
          onPressItem={this._onPressItem}
        />
      );
    _onPressItem = (item) => {
        this.props.updateUserAddress({
            address:item
        });
        this.props.navigation.navigate('Location')
        this.setState({
            keyword:''
        })
    }
    textChange = (text) =>{
        this.setState({
            keyword:text
        })    
    }
    chooseCity = () => {
        this.props.navigation.navigate('ChooseCity')
    }
    render() {
        return(
            <View style = { styles.chooseAddressContainer }>
                <View style={styles.header}>
                    <Button style={styles.cityBtn} title={this.props.user.locationCity.name} rightIcon={{name: 'arrow-drop-down'}} onPress={this.chooseCity}/>
                    <TextInput style={styles.input} placeholder='小区/写字楼/学校等' onChangeText={this.textChange} value={this.state.keyword}></TextInput>
                    <Button style={styles.cancelBtn} title='搜索' onPress={this.search}/>
                </View>
                <View style={styles.list}>
                    <FlatList
                        data={this.state.addressList}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                    />
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
    header:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:10,
    },
    cityBtn:{
        flex:1,
    },
    input:{
        flex:5,
        height:45,
        borderColor:'#EEEEE0',
        borderWidth:1,
    },
    cancelBtn:{
        flex:1,
        color:'#50bfff',
    },
    list:{
        flex:8,
        paddingLeft:10,
        paddingTop:10,
        paddingRight:10
    }
})

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => {
    return {
        updateUserAddress: bindActionCreators(updateUserAddress, dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChooseAddress);
