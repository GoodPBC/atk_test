import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Search from '../components/Search'
// import UseYelpApiSearchHook from '../hooks/UseYelpApiSearchHook'
import SearchResults from '../components/SearchResults'
import yelp from '../api/yelp'


const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    // const [YelpApiSearch, results, errorMessage] = UseYelpApiSearchHook()     // searchHook

    const searchYelpAPI = async searchTerm => {

        try {
            const res =  await yelp.get(`/search`, {
                params: {
                    term: searchTerm,
                    limit: 5,
                    location: `jersey city`
                }
            });
            setResults(res.data.businesses)
        } catch (err) {
            setErrorMessage('OOPS, Something Went Wrong.')
            console.log(err)
        }
    }

    useEffect(() => {
        //call yelp api 
        searchYelpAPI('Jersey City')

        console.log('API RESULTS FROM useEffect(): ', results)
    }, []);

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


// import React, { useState, useEffect } from 'react'
// import yelp from "../api/yelp";

// //Yelp  API Helper
// export default () => {
    

    
//     // Axios Helper
//     const YelpApiSearch = async searchTerm => {

//     };

//     return [YelpApiSearch, results, errorMessage]
// }