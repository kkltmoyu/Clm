import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SectionList,
    TouchableOpacity,
} from 'react-native';
import { Button,SearchBar } from 'react-native-elements'
import { getCitiesByChar,getHotCities } from '../../service/getData'

class ChooseCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotCity:[],
            inputCity:'',
            cities:[]
        }
        this.returnPage = this.returnPage.bind(this)
        this.getHotCitiesList = this.getHotCitiesList.bind(this)
        this.chooseItem = this.chooseItem.bind(this)
    }

    componentDidMount() {
        this.getAllCities()
        this.getHotCitiesList()
    }
    returnPage(){
        this.props.navigation.navigate('Location')
    }

    getAllCities(){
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
    getHotCitiesList(){
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
    chooseItem(value){
        console.log('chooseItem is ',value)
    }
    sectionComp(info){
        let txt = info.section.key;
        return <Text
            style={styles.sectionHeader} key={txt}>{txt}</Text>
    }
    renderItem = (info) =>{ 
        //console.log('info is ',info)
        return <View>
            {
                info.section.data.map((item, i) => {
                     //
                    this.renderExpenseItem(item, i)
                })
            }
        </View>
       
    }
    renderExpenseItem(item, i) {
        return <TouchableOpacity key={i} onPress={() => this.chooseItem(item)}>
           <Text key={i} style={styles.sectionItem}>{item.name}</Text>
        </TouchableOpacity>;
    }
    render() {
        let rowOne = [],
            rowTwo = [],
            rowThree = [],
            rowTextOne = '',
            rowTextTwo = '',
            rowTextThree = ''
            hotCities = []
        if(this.state.hotCity.length === 9 ){
            rowOne = this.state.hotCity.slice(0,3)
            rowTwo = this.state.hotCity.slice(3,6)
            rowThree = this.state.hotCity.slice(6)
            rowTextOne = rowOne.map((item) => <Text key={item.name} style={styles.oneHotCity}>{item.name}</Text>)
            rowTextTwo = rowTwo.map((item) => <Text key={item.name} style={styles.oneHotCity}>{item.name}</Text>)
            rowTextThree = rowThree.map((item) => <Text key={item.name} style={styles.oneHotCity}>{item.name}</Text>)
            hotCities.push(<View key='rowOne' style={styles.row}>{rowTextOne}</View>)
            hotCities.push(<View key='rowTwo' style={styles.row}>{rowTextTwo}</View>)
            hotCities.push(<View key='rowThree' style={styles.row}>{rowTextThree}</View>)
        }
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
    row:{
        flex:1,
        paddingLeft:10,
        paddingTop:5,
        paddingBottom:5,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    oneHotCity:{
        flex:1,
        color:'#000',
        // backgroundColor:'rgba(23, 35, 61, 0.06)',
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
        //height: 50, textAlign: 'center', textAlignVertical: 'center', backgroundColor: '#9CEBBC', color: 'white', fontSize: 30 
    },
    sectionItem: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

export default ChooseCity;
