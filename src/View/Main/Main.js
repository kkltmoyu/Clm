import React,{ Component } from 'react'; 
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import utils from '../../util/util'

class Main extends Component {
  static navigationOptions = {
    title: 'tt1',
  };
  constructor(props){
    super(props);
    this.state = {
    } 
  }
  componentDidMount(){
    // this.getData()
  }
   _onPressReset() {
    this.props.dispatch(reset());
  }
  getBDData(){
     fetch('http://api.map.baidu.com/place/v2/suggestion?query=天&region=北京市&city_limit=true&output=json&ak=WrXbRe8gO1bFqqMUwj6PHgcnBQBO6Lpj')
    .then(response => {
      return response.json()
    })
    .then(responseJson => {
         debugger
         console.log(responseJson)
      return true;
    })
    .catch(error => {
      debugger
      console.error(error);
    });
  }
  getData(){
    utils.makeRequest({
      url:'getOne'
    })
    .then(response => {
      console.log('response:',response)
      return response.json()
    })
    .then(responseJson => {
         // debugger
         console.log('responseJson:',responseJson)
      return true;
    })
    .catch(error => {
      debugger
      console.error(error);
    });
  }
  postData(){
    utils.makeRequest({
      url:'sendP',
      method:'POST'
    })
    .then(response => {
      console.log('response:',response)
      return response.json()
    })
    .then(responseJson => {
         console.log('responseJson:',responseJson)
      return true;
    })
    .catch(error => {
      console.error(error);
    });
  }
    render() {
        return (
          <View style={styles.container}>
            <Text>Main111</Text>
            <Button onPress={this.getBDData} title='fetchbaidu'></Button>
            <Button onPress={this.getData} title='fetchget'></Button>
            <Button onPress={this.postData} title='fetchpost'></Button>
            <Button onPress={()=>{
              this.props.navigation.navigate('Order')
            }} title='Go to order'></Button>
            <Button onPress={()=>{
              this.props.navigation.navigate('One')
            }} title='go to one'></Button>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  reset: {
    margin: 10,
    backgroundColor: 'yellow'
  },
  start: {
    margin: 10,
    backgroundColor: 'yellow'
  },
  stop: {
    margin: 10,
    backgroundColor: 'yellow'
  }
})

const mapStateToProps = state => ({
    // counter: state.counter
})

export default connect(mapStateToProps)(Main);