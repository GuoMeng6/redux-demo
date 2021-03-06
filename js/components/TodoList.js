import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    ListView,
    ToastAndroid,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
} from 'react-native';

const windows = Dimensions.get('window');
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class TodoList extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ListView
          dataSource={ds.cloneWithRows(this.props.todos)}
          renderRow={this.renderViewRow.bind(this)}
        />
      </View>
    );
  }

  renderViewRow(rowData, sectionID, rowID) {
    return (
      <TouchableOpacity onPress={() => {
        ToastAndroid.show(`clickRowID = ${rowID}`, ToastAndroid.SHORT);
        this.props.onTodoClick(rowID);
      }}>
        <View style={(styles.viewStyle)}>
          <Text style={{ fontSize: 20, color: '#00ff00' }}>{rowData.text}
          </Text>
          <Text style={(rowData.completed) ? (styles.textBlack) : (styles.textWhite)}>已点击</Text>
        </View>
        </TouchableOpacity>
    );
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
};

const styles = StyleSheet.create(
  {
    textBlack: {
      color: '#000000',
      fontSize: 20,
      paddingLeft: 20,

    },
    textWhite: {
      color: '#00000000',
    },

    viewStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      padding: 5,
      borderBottomColor: '#999999',
      borderBottomWidth: 2,
      width: windows.width,
    },
  }
);
