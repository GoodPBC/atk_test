import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Search from '../components/Search'
import yelp from '../api/yelp'


const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    // Axios Helper
    const ApiHelper = async searchTerm => {
        console.log("Hi There");
        try{
            const res =  await yelp.get(`/search`, {
                //api headers here
                params: {
                    term: searchTerm,
                    limit: 2,
                    location: `jersey city`
                }
            });
            //api state setter
            setResults(res.data.businesses)
            console.log(res.data.businesses)
        } catch (err) {
            setErrorMessage('OOPS, Something Went Wrong.')
            console.log(err)
        }
        

    }

    return (
        <View>
            {/* Search Bar */}
            <Search 
                term={term} 
                onChangeTerm={setTerm}
                onTermSubmit={() => ApiHelper(term)} 
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <Text>We found {results.length} results </Text>
            
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({

})
