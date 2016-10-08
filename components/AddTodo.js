import React, { Component, PropTypes } from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
ToastAndroid,

} from 'react-native'

export default class AddTodo extends Component {


    render() {
        return (
            <View style={{ flex : 1,alignItems: 'center',}}>
                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1,width:200,marginTop:50}} ref='input' ></TextInput>
                <TouchableOpacity style={{height:40,marginTop:20,width:100}} onPress= {this.handleClick().bind(this)}>
                    <Text style={{flex:1}}>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }

    handleClick() {
        const node = this.refs.input;
        ToastAndroid.show("text = "+node,ToastAndroid.SHORT);
        this.props.onAddClick(node);
        node.value = ''
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
}

