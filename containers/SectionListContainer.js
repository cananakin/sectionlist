import React, { Component } from 'react';
import { Text, SectionList, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants'


const styles =  StyleSheet.create({
    container: {
        flex:1,
        marginBottom: Constants.statusBarHeight,
        marginHorizontal: 16,
    },
    header: {
        fontSize:24,
        fontWeight: '700',
        color: '#444',
        //marginTop: 10,
        backgroundColor: '#eee',
        paddingVertical: 10,
        
    },
    item: {
        fontSize: 16,
        padding: 20,
        marginVertical: 8,
        backgroundColor: '#fff',
    }
})
class SectionListContainer extends Component {
    
    render () {
        const Item = (props) => (
            <Text key={props.index} style={styles.item}>{props.item}</Text>
        );

        const renderHeader = ({section: { title }}) => (
            <Text style={styles.header}>{title}</Text>
        );

        return (
            <SafeAreaView style={styles.container}>
                <SectionList 
                    keyExtractor={(item, index) => item + index}
                    sections={this.props.DATA}
                    renderItem={Item}
                    renderSectionHeader = {renderHeader}
                    />
            </SafeAreaView>
        );
    }
}

export default SectionListContainer;