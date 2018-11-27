import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { SearchBar } from 'react-native-elements'

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
        return(
            <View style = { styles.chooseCityContainer }>
                <View style={styles.header}>
                    <SearchBar style={styles.searchBar} placeholder='输入城市名' value={this.state.inputCity}></SearchBar>
                    <Button style={styles.cancelBtn} title='取消' onPress={this.returnPage}/>
                </View>
                <View style={styles.hotCity}>
                    {/*<SearchBar style={styles.SearchBar}></SearchBar>
                    <Button style={styles.cancelBtn} title='取消' />*/}
                </View>
                <View style={styles.cityList}>
                    {/*<SearchBar style={styles.SearchBar}></SearchBar>
                    <Button style={styles.cancelBtn} title='取消' />*/}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    chooseCityContainer:{
        flex: 1,
    },
    header:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    searchBar:{
        flex:6
    },
    cancelBtn:{
        marginLeft:10,
        flex:3
    },
    hotCity:{
        flex:3
    },
    cityList:{
        flex:4
    }
})

export default ChooseCity;
