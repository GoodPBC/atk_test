import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Search from '../components/Search'
import UseYelpApiSearchHook from '../hooks/UseYelpApiSearchHook'
import SearchResults from '../components/SearchResults'



const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [YelpApiSearch, results, errorMessage] = UseYelpApiSearchHook()

    console.log( results )

    return (
        <View>
            {/* Search Bar */}
            <Search 
                term={term} 
                onChangeTerm={setTerm}
                onTermSubmit={() => YelpApiSearch(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <View>
                <Text>We found {results.length} results </Text>
                
                <SearchResults title='On A Nickel'/>
                <SearchResults title='On A Dime'/>
                <SearchResults title='On A Quarter'/>
            </View>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({

})
