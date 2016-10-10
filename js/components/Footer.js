import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';


const SHOW_ALL = 'SHOW_ALL';
export default class Footer extends Component {

  clickFooter(filter) {
    ToastAndroid.show(`点击了footer  ${filter}`, ToastAndroid.SHORT);
    this.props.onFilterChange(SHOW_ALL);
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
          <Text style={(styles.textstyle)}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={(styles.touchstyle)}
          onPress={() => {
            ToastAndroid.show('SHOW_COMPLETED ', ToastAndroid.SHORT);
            this.props.onFilterChange('SHOW_COMPLETED');
          }}
        >
          <Text style={(styles.textstyle)}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={(styles.touchstyle)}
          onPress={() => {
            ToastAndroid.show('SHOW_ACTIVE ', ToastAndroid.SHORT);
            this.props.onFilterChange('SHOW_ACTIVE');
          }}
        >
          <Text style={(styles.textstyle)}>Active</Text>
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

  }
);
