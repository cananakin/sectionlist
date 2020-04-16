import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'purple',
        justifyContent:'center',
        height: 40
    },
    headerTitle: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
})

const Header = (props) => (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>Exercise 4</Text>
    </View>
)

export default Header;


