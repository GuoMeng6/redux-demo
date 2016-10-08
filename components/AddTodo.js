import React, { Component, PropTypes } from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
Text,
ToastAndroid,

} from 'react-native'

export default class AddTodo extends Component {

    constructor(props){
        super(props);
        this.state = {
            text:''
        }

    }


    render() {
        return (
            <View style={{ flex : 1,alignItems: 'center',}}>
                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1,width:200,marginTop:50}} onChangeText={(txt) => this.setState({
                    text:txt
                })
                } value = {this.state.text}></TextInput>
                <TouchableOpacity style={{height:40,marginTop:20,width:100}} onPress= {this.handleClick.bind(this)}>
                    <Text style={{flex:1}}>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }

    handleClick() {
        // const node = this.refs.input;
        this.props.onAddClick(this.state.text);
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
}

