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

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      amount : 3
    } 
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
    render() {
        return (
          <View style={styles.container}>
            <Text>Main111</Text>
            <Button onPress={()=>{
              this.props.navigation.navigate('Order')
            }} title='Go to order'></Button>
            <Button onPress={()=>{
              this.props.navigation.navigate('One')
            }} title='wang'></Button>
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