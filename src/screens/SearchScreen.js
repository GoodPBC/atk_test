import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
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
                <Text>We found {results.length} results </Text>
            
                
                <SearchResults results={resultsPriceFilterHelper('$')} title='On A Nickel'/>
                <SearchResults results={resultsPriceFilterHelper('$$')} title='On A Dime'/>
                <SearchResults results={resultsPriceFilterHelper('$$$')} title='On A Quarter'/>
            </View>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({

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