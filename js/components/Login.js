import React, { Component, PropTypes } from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

const text = '';
export default class Login extends Component {


  clickLoginOn() {
    this.props.onLoginOnClick(text);
  }

  clickLoginOff() {
    this.props.onLoginOffClick();
  }

  render() {
    return (
      <View style={(styles.loginView)}>
        <View style={(styles.loginrowView)}>
          <TextInput
            style={(styles.loginInput)}
            onChangeText={(txt) => { text = txt; }}
          />
          <TouchableOpacity
            style={(styles.touchStyle)}
            onPress={
              this.clickLoginOn.bind(this)
            }
          >
            <Text style={(styles.textStyle)}>login on</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={(styles.touchStyle)}
            onPress={this.clickLoginOff.bind(this)}
          >
            <Text style={(styles.textStyle)}>login off</Text>
          </TouchableOpacity>
        </View>
        <View style={(styles.loginrowView)}>
          <Text style={(styles.textStyle)}>{this.props.texts}</Text>
        </View>

      </View>
    );
  }
}

Login.propTypes = {
  texts: PropTypes.string.isRequired,
  onLoginOnClick: PropTypes.func.isRequired,
  onLoginOffClick: PropTypes.func.isRequired,
};

const styles = StyleSheet.create(
  {
    loginInput: {
      width: 170,
    },
    touchStyle: {
      marginLeft: 20,
    },
    loginrowView: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textStyle: {
      fontSize: 20,
    },
    loginView: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
);
