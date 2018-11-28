import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Button,SearchBar } from 'react-native-elements'

class ChooseCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotCity:['上海','杭州','北京','广州','天津','南京','武汉','苏州','福州'],
            inputCity:'',
        }
        this.returnPage = this.returnPage.bind(this)
    }

    componentDidMount() {}
    returnPage(){
        this.props.navigation.navigate('Location')
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
})

export default ChooseCity;
