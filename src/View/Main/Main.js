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
import { increase, decrease, reset } from '../../store/actions/actions';
import utils from '../../util/util'

class Main extends Component {
  static navigationOptions = {
    title: 'tt1',
  };
  constructor(props){
    super(props);
    this.state = {
      amount : 3
    } 
  }
  componentDidMount(){
    // this.getData()
  }
   _onPressReset() {
    this.props.dispatch(reset());
  }

  _onPressInc() {
    this.props.dispatch(increase({
      amount:this.state.amount
    }));
  }

  _onPressDec() {
    this.props.dispatch(decrease());
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
         // debugger
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
            {/*<Button onPress={this.getBDData} title='fetchbaidu'></Button>
            <Button onPress={this.getData} title='fetchget'></Button>
            <Button onPress={this.postData} title='fetchpost'></Button>*/}
            <Button onPress={()=>{
              this.props.navigation.navigate('Order')
            }} title='Go to order'></Button>
            <Button onPress={()=>{
              this.props.navigation.navigate('One')
            }} title='go to one'></Button>
            <Text style={styles.counter}>{this.props.counter.count}</Text>
            <TouchableOpacity style={styles.reset} onPress={()=>this._onPressReset()}>
              <Text>归零</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.start} onPress={()=>this._onPressInc()}>
              <Text>加1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.stop} onPress={()=>this._onPressDec()}>
              <Text>减1</Text>
            </TouchableOpacity>
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
  counter: {
    fontSize: 50,
    marginBottom: 70
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
    counter: state.counter
})

export default connect(mapStateToProps)(Main);