import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

class AddressItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.item);
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={ styles.addressItemContainer }>
          <View style={styles.summary}>
            <Text style={styles.city}>
              {this.props.item.city}
            </Text>
            <Text style={styles.district}>
              {this.props.item.district}
            </Text>
          </View>
          <View style={styles.detail}>
            <Text>
              {this.props.item.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    addressItemContainer:{
      paddingTop:5,
      paddingLeft:10,
      paddingRight:10,
      paddingBottom:5,
      borderBottomColor:'#EEEEE0',
      borderBottomWidth:1,
      flex: 1,
      backgroundColor:'#ffffff',
    },
    summary:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        // justifyContent:'space-between',
    },
    city:{
      flex:1,
      fontSize:12,
    },
    district:{
      flex:1,
      fontSize:12,
      textAlign:'right',
    },
    detail:{
      marginTop:5,
      fontSize:14,
    }
})

export default AddressItem