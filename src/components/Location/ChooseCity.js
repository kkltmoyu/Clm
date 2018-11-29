import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SectionList,
} from 'react-native';
import { Button,SearchBar } from 'react-native-elements'
import { getCitiesByChar } from '../../service/getData'

class ChooseCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotCity:['上海','杭州','北京','广州','天津','南京','武汉','苏州','福州'],
            inputCity:'',
            // firstCharacters:[],
            cities:[]
        }
        this.returnPage = this.returnPage.bind(this)
    }

    componentDidMount() {
        this.getAllCities()
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

    render() {
        let rowOne = [],
            rowTwo = [],
            rowThree = [],
            rowTextOne = ''
        if(this.state.hotCity.length === 9 ){
            rowOne = this.state.hotCity.slice(0,3)
            rowTwo = this.state.hotCity.slice(3,6)
            rowThree = this.state.hotCity.slice(6)
            rowTextOne = rowOne.map((item) => <Text key={item} styles='oneHotCity'>{item}</Text>)
            rowTextTwo = rowTwo.map((item) => <Text key={item} styles='oneHotCity'>{item}</Text>)
            rowTextThree = rowThree.map((item) => <Text key={item} styles='oneHotCity'>{item}</Text>)
        }
        return(
            <View style = { styles.chooseCityContainer }>
                <View style={styles.header}>
                    <SearchBar containerStyle={styles.searchBarInput} placeholder='输入城市名' value={this.state.inputCity}></SearchBar>
                    <Button style={styles.cancelBtn} title='取消' onPress={this.returnPage}/>
                </View>
                <View style={styles.hotCity}>
                    <Text style={styles.title}>热门城市</Text>
                    <View style={styles.row}>
                        {rowTextOne}
                    </View>
                    <View style={styles.row}>
                        {rowTextTwo}
                    </View>
                    <View style={styles.row}>
                        {rowTextThree}
                    </View>
                </View>
                <View style={styles.cityList}>
                    <SectionList
                      renderItem={({ item, index, section }) => <Text key={index}>{item.name}</Text>}
                      renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.sectionHeader}>{title}</Text>
                      )}
                      sections={this.state.cities}
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
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

export default ChooseCity;
