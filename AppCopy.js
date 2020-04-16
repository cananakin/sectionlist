import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, SectionList } from 'react-native';
import Constants from 'expo-constants'
import Row from './components/Row'
import Header from './components/Header'
import ModifyObjectForm from './ModifyObjectForm'

const MY_LIST = {
  country: 'UK',
  cities : ['London','Bristol','Oxford'] 
}

const toArray = val => val instanceof Array ? val : [val];

const toObject = (value, key) => ({key, value});

const renderItem = ({item}) => <Row {...item} />

const renderSectionHeader = ({section}) => <Header text={section.title} />


export default class App extends Component {
  state = {
    obj: MY_LIST,
    showForm: false
  }

  showForm = () => {
    this.setState({showForm: true})
  }

  modifyObject = (key, val) => {
    let parsed
    try {
      parsed = JSON.parse(val)
    } catch (err) {
      parsed = val
    }

    this.setState(prevState => {
      if (prevState.obj[key] instanceof Array) {
        return {showForm: false, obj: {...prevState.obj, [key]: [parsed, ...prevState.obj[key]]}}
      }
      return {showForm: false, obj: {...prevState.obj, [key]: parsed}}
    })
  }

  render () {
    if (this.state.showForm) return <ModifyObjectForm onSubmit={this.modifyObject} />

    const sections = Object.keys(this.state.obj).map(key => ({
      key,
      title: key,
      data: toArray(this.state.obj[key]).map(toObject)
    }))
    return (
      <View style={styles.container}>
        <Button onPress={this.showForm} title='Show' />
        <SectionList 
          sections={sections}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
        />
      </View>
    )
  }
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    paddingTop: Constants.statusBarHeight,
  },
  list: {
    flex: 1,
  },
});
