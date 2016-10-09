import React, {Component, PropTypes} from 'react'
import {
    View,
    Text,
    ListView,
    ToastAndroid,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import Todo from './Todo'
var window = Dimensions.get('window');
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class TodoList extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                {/*<Text>{this.props.todos.map((item, index) => {
                 return (
                 <Text style={{padding: 10, backgroundColor: 'red'}}>{item.text}</Text>
                 )
                 })}</Text>*/}
                <ListView
                    dataSource={ds.cloneWithRows(this.props.todos)}
                    renderRow={this.renderViewRow.bind(this)}
                ></ListView>
            </View>
        )
    }

    renderViewRow(rowData,sectionID,rowID) {

        return (
            <TouchableOpacity onPress={() =>{
                ToastAndroid.show("clickRowID = "+rowID,ToastAndroid.SHORT);
                this.props.onTodoClick(rowID);
            }}>
                <View style={{
                    flexDirection: 'row', alignItem: 'center', justifyContent: 'center', height: 30, padding: 5,
                    borderBottomColor: '#999999', borderBottomWidth: 2,width: window.width,
                }}>
                    <Text style={{fontsize: 20, color: '#00ff00'}}>{rowData.text}
                    </Text>

                </View>
            </TouchableOpacity>
        )
    }



}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
}