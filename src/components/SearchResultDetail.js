import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const SearchResultDetail = ({ result }) => {
    return (
        <View style={styles.wrapper}>
            <Image 
                source={{uri: result.image_url}}
                style={{width: 250,height: 100, borderRadius: 4}}
            />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: 15,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'blue',
    }
})

export default SearchResultDetail

