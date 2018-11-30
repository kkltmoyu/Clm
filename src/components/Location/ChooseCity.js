import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SectionList,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { Button,SearchBar } from 'react-native-elements'
import { updateUserCity } from '../../store/actions/actions';
// import * as actions from '../../store/actions/actions'
import { getCitiesByChar,getHotCities } from '../../service/getData'
import { bindActionCreators } from 'redux'

const ScreenWidth = Dimensions.get('window').width;

class ChooseCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotCity:[],
            inputCity:'',
            cities:[]
        }
    }
    componentDidMount() {
        this.getAllCities()
        this.getHotCitiesList()
    }
    returnPage = () =>{
        this.props.navigation.navigate('Location')
    }
    getAllCities = () =>{
        getCitiesByChar().then((res) => {
            if(res.code === 200){
                let cities = res.data
                this.setState({
                    cities:cities
                })
            }
        }).catch((e)=>{
            console.log('获取城市列表失败')
        })
    }
    getHotCitiesList = () =>{
        getHotCities().then((res) => {
            if(res.code === 200){
                this.setState({
                    hotCity:res.data
                })
            }
        }).catch((e)=>{
            console.log('获取热门城市失败')
        })
    }
    chooseItem = (item) => {
        this.props.updateUserCity({
            city:item
        });
        this.returnPage()
    }
    sectionComp = (info) =>{
        let txt = info.section.key;
        return <Text style={styles.sectionHeader} key={txt}>{txt}</Text>
    }
    renderItem = ({item,index}) =>{ 
        return <TouchableOpacity key={item.name} onPress={() => this.chooseItem(item)}>
           <Text key={index} style={styles.sectionItem}>{item.name}</Text>
        </TouchableOpacity>;
    }
    renderHotCities = () =>{
        let cityItems = []
        this.state.hotCity.map((item) =>{
            cityItems.push(<View key={item.name} style={styles.oneHotCityWrapper}><TouchableOpacity key={item.name} onPress={() => this.chooseItem(item)}><Text style={styles.oneHotCity}>{item.name}</Text></TouchableOpacity></View>)
        })
        return <View  style={styles.hotCities}>
            { cityItems }
            </View>
    }
    render() {
        const hotCities = this.renderHotCities()
        return(
            <View style = { styles.chooseCityContainer }>
                <View style={styles.header}>
                    <SearchBar containerStyle={styles.searchBarInput} placeholder='输入城市名' value={this.state.inputCity}></SearchBar>
                    <Button style={styles.cancelBtn} title='取消' onPress={this.returnPage}/>
                </View>
                <View style={styles.hotCity}>
                    <Text style={styles.title}>热门城市</Text>
                    {hotCities}
                </View>
                <View style={styles.cityList}>
                    <SectionList
                        renderItem={this.renderItem}
                        renderSectionHeader={this.sectionComp}
                        sections={this.state.cities}
                        keyExtractor={(item, index) => item + index}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    chooseCityContainer:{
        flex: 1,
        backgroundColor:'#ffffff',
    },
    header:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        paddingLeft:10,
    },
    searchBarInput:{
        flex:4
    },
    title:{
        color:'rgb(241, 243, 244)',
    },
    cancelBtn:{
        marginLeft:10,
        flex:1
    },
    hotCity:{
        flex:2
    },
    cityList:{
        flex:4
    },
    hotCities:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        paddingTop:20,
    },
    oneHotCityWrapper:{
        justifyContent: 'center',
        width: (ScreenWidth - 1) / 3,
        height: 40,
        alignItems: 'center',
    },
    oneHotCity:{
        flex:1,
        color:'#000',
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        color:'red',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    sectionItem: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => {
    return {
        updateUserCity: bindActionCreators(updateUserCity, dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChooseCity);
