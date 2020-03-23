import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import SearchResultDetail from './SearchResultDetail'


const SearchResults = ({ title, results }) => {

    
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>Results: {results.length}</Text>
            
            {/* Search Result FlatList */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={results => results.id}
                data={results} 
                renderItem={( {item} ) => {
                    return <View style={styles.text}>
                        <SearchResultDetail result={item}/>
                    </View>
                }}
            />

        </View>
    )
}



const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 1,
    }
})

export default SearchResults