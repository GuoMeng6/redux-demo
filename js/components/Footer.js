import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';


const SHOW_ALL = 'SHOW_ALL';
const SHOW_COMPLETED = 'SHOW_COMPLETED';
const SHOW_ACTIVE = 'SHOW_ACTIVE';
export default class Footer extends Component {

  clickFooter(filter) {
    ToastAndroid.show(`点击了footer  ${filter}`, ToastAndroid.SHORT);
    this.props.onFilterChange(SHOW_ALL);
  }

  textShowAll() {
    if (SHOW_ALL === this.props.filter) {
      ToastAndroid.show(`SHOW_ALL = ${SHOW_ALL}  filter = ${this.props.filter}`, ToastAndroid.SHORT);
      return true;
    } else {
      ToastAndroid.show(`SHOW_ALL = ${SHOW_ALL}  filter = ${this.props.filter}`, ToastAndroid.SHORT);
      return false;
    }
  }


  render() {
    return (
      <View style={(styles.footView)}>
        <TouchableOpacity
          style={(styles.touchstyle)}
          onPress={() => {
            ToastAndroid.show('showAll', ToastAndroid.SHORT);
            this.props.onFilterChange(SHOW_ALL); }}
        >
          <Text style={(SHOW_ALL === this.props.filter) ? (styles.textstyle) : (styles.textFalsestyle)}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={(styles.touchstyle)}
          onPress={() => {
            ToastAndroid.show('SHOW_COMPLETED ', ToastAndroid.SHORT);
            this.props.onFilterChange('SHOW_COMPLETED');
          }}
        >
          <Text style={(SHOW_COMPLETED === this.props.filter) ? (styles.textstyle) : (styles.textFalsestyle)}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={(styles.touchstyle)}
          onPress={() => {
            ToastAndroid.show('SHOW_ACTIVE ', ToastAndroid.SHORT);
            this.props.onFilterChange('SHOW_ACTIVE');
          }}
        >
          <Text style={(SHOW_ACTIVE === this.props.filter) ? (styles.textstyle) : (styles.textFalsestyle)}>Active</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Footer.propTypes = {
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE',
  ]).isRequired,
};

const styles = StyleSheet.create(
  {
    footView: {
      flexDirection: 'row',
      marginBottom: 100,
    },
    textstyle: {
      flex: 1,
      fontSize: 20,
      color: '#ff0000',
      justifyContent: 'center',

    },
    touchstyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    textFalsestyle: {
      flex: 1,
      fontSize: 20,
      color: '#000000',
      justifyContent: 'center',
    },
  }
);
