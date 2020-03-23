import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Search from '../components/Search'
import UseSearchResultsHook from '../hooks/UseSearchResultsHook'
import SearchResults from '../components/SearchResults'


const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchYelpAPI, results, errorMessage] = UseSearchResultsHook();

    console.log('This is Results: ', results)

    const resultsPriceFilterHelper = price => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
          return result.price === price;
        });
    
    };
    return (
        <View>
            {/* Search Bar */}
            <Search 
                term={term} 
                onChangeTerm={setTerm}
                onTermSubmit={() => searchYelpAPI(term)}
            />
            
            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <View>
                <Text style={styles.header}>We found {results.length} results </Text>
            
                <ScrollView>
                    <SearchResults style={styles.results} results={resultsPriceFilterHelper('$')} title='On A Nickel'/>
                    <SearchResults style={styles.results} results={resultsPriceFilterHelper('$$')} title='On A Dime'/>
                    <SearchResults style={styles.results} results={resultsPriceFilterHelper('$$$')} title='On A Quarter'/>
                    <SearchResults style={styles.results} results={resultsPriceFilterHelper('$$$$')} title='Splurge'/>
                </ScrollView>
            </View>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    header: {
        marginLeft: 15
    },
    results: {
        marginLeft: 15
    }
})


// import React, { useState, useEffect } from 'react'
// import yelp from "../api/yelp";

// //Yelp  API Helper
// export default () => {
    

    
//     // Axios Helper
//     const YelpApiSearch = async searchTerm => {

//     };

//     return [YelpApiSearch, results, errorMessage]
// }