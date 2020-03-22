import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SearchResults = ({ title, results }) => {

    
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>Results: {results.length}</Text>

        </View>
    )
}



const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default SearchResults