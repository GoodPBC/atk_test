import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Search from '../components/Search'
import yelp from '../api/yelp'
import UseYelpApiSearchHook from '../hooks/UseYelpApiSearchHook'



const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [YelpApiSearch, results, errorMessage] = UseYelpApiSearchHook()

    return (
        <View>
            {/* Search Bar */}
            <Search 
                term={term} 
                onChangeTerm={setTerm}
                onTermSubmit={() => YelpApiSearch(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <Text>We found {results.length} results </Text>
            
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({

})
