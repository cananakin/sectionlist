import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants'

import Aux from './hoc/Aux';

// Component
import Header from './components/Layout/Header';
import SectionListContainer from './containers/SectionListContainer';
import AddData from './containers/Form';

const INITIAL_DATA = [
    {
        title: 'Verb',
        data: ['stay', 'come', 'go']
    },
    {
        title: 'Noun',
        data: ['company', 'thing', 'health']
    },
    {
        title: 'Adjective',
        data: ['perfect', 'nervous', 'go']
    },
    {
        title: 'Adverb',
        data: ['stay', 'come', 'go']
    }
]

class App extends Component {
	state = {
		showForm: false,
		data: INITIAL_DATA
	}

	showFormHandler = () => {
		this.setState(prevState => ({
			showForm: !prevState.showForm	
		}))
	}

	savedDataHandler = (data) => {
		const newData = [...this.state.data];
		const titles = newData.map(item => item.title);
		
		if(titles.includes(data.key)) {
			newData.map(obj => {
				obj.title === data.key ? obj.data.unshift(data.value) : null
		   })
		}else {
			newData.unshift({title:data.key, data:[data.value]});
		}
		
		this.setState(prevState => ({
			data: newData,
			showForm: !prevState.showForm	
		}));
	}

	render() {
		const { showForm, data } = this.state;
		return (
			<View style={styles.container}>
				<Header />
				{ !showForm ? 
					<Aux>
						<TouchableOpacity style={styles.button} onPress={this.showFormHandler} >
							<Text style={styles.buttonText}>ADD DATA</Text>
						</TouchableOpacity>
						<SectionListContainer DATA={data} />
					</Aux>
					:
					<AddData savedData={this.savedDataHandler} onClosedForm={this.showFormHandler} />
				}
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee',
		alignItems: 'stretch',
		paddingTop: Constants.statusBarHeight,
	},
	button: {
		backgroundColor: '#FFF',
		margin:20,
		marginBottom: 10,
		alignItems: 'center',
		padding: 15,
		borderColor: 'purple',
		borderWidth:1,
		borderRadius:4
	},
	buttonText: {
		color: 'purple',
		fontWeight: 'bold',
		fontSize: 20
	}
});

export default App;