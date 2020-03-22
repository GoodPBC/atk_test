import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SearchResults = ({ title }) => {

    
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
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