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
import AddressItem from './AddressItem'

class ChooseAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword:'',
            addressList:[]
        }
    }

    componentDidMount() {
        this.getAllCities()
    }
    returnPage = () =>{
        this.props.navigation.navigate('Location')
    }

    search = () =>{
        searchDestination().then((res) => {
            if(res.code === 500){
                console.log('查询失败')
               
            }
            else if(res.code === 200){
                
            }
        }).catch((e)=>{
            console.log('获取当前城市失败')
            
        })
    }
    _keyExtractor = (item, index) => item.id;
    _renderItem = ({item}) => (
        <AddressItem
          id={item.id}
          onPressItem={this._onPressItem}
          title={item.title}
        />
      );

    render() {
        return(
            <View style = { styles.chooseAddressContainer }>
                <View style={styles.header}>
                    <Button style={styles.cityBtn} title={this.props.user.locationCity.name} rightIcon={{name: 'arrow-drop-down'}} onPress={this.chooseCity}/>
                    <TextInput style={styles.input} placeholder='小区/写字楼/学校等' value={this.state.keyword}></TextInput>
                    <Button style={styles.cancelBtn} title='搜索' onPress={this.search}/>
                </View>
                <View style={styles.list}>
                    <FlatList
                        data={[{key: 'a'}, {key: 'b'}]}
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
        paddingTop:10
    }
})

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(ChooseAddress);
