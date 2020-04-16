import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

const TITLE = ['Verb', 'Noun', 'Adjective', 'Adverb'];

class Form extends Component {
    state = {
        key: '',
        value: '',
    }

    onChangedInput = (text, type) => {
        this.setState({
            [type]: text 
        })
    }

    render() {
        const { key, value } = this.state;
        
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Form </Text>
                <TextInput style={styles.input} value={key} placeholder='Key' onChangeText={(text) => this.onChangedInput(text ,'key')} />
                <TextInput style={styles.input} value={value} placeholder='Value' onChangeText={(text) => this.onChangedInput(text, 'value')} />
                <View style={styles.buttonView}>
                    <TouchableOpacity style={[styles.button,styles.buttonSave]} onPress={() => this.props.savedData(this.state)}>
                        <Text style={styles.buttonText}>Save</Text>    
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonCancel]} onPress={this.props.onClosedForm}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 10
    },
    text: {
        margin: 20,
        fontSize: 30,
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 4,
        backgroundColor: '#fff',
        marginBottom: 20,
        marginHorizontal: 20,
        fontSize: 16,
        height:35,
        paddingHorizontal: 10
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
		margin:20,
		marginBottom: 10,
		alignItems: 'center',
		padding: 10,
		borderWidth:1,
        borderRadius:4,
        width: 100
    },
    buttonSave : {
        backgroundColor: 'purple',
        borderColor: 'purple',
    },
    buttonCancel: {
        backgroundColor: '#aaa',
        borderColor: '#444',
    },
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 18
	}
})

export default Form;