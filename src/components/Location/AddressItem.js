import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput
} from 'react-native';

class AddressItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const textColor = this.props.selected ? "red" : "black";
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text style={{ color: textColor }}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    chooseAddressContainer:{
        flex: 1,
        backgroundColor:'#ffffff',
    },
})

export default AddressItem