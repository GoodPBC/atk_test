import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Search from '../components/Search'
import yelp from '../api/yelp'


const SearchScreen = () => {
    const [searchText, handleSearchText] = useState('')
    const [yelpResults, setYelpResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    // Axios Helper
    const ApiHelper = async () => {
        try{
            const res =  await yelp.get(`/search`, {
                //api headers here
                params: {
                    term: searchText,
                    limit: 2,
                    location: `jersey city`
                }
            });
            //api state setter
            setYelpResults(res.data.businesses)
        } catch (err) {
            setErrorMessage('OOPS, Something Went Wrong.')
        }
        

    }

    return (
        <View>
            {/* Search Bar */}
            <Search 
                value={searchText} 
                placeholder="Search" 
                onChangeText={
                    newSearchText => {
                        handleSearchText(newSearchText)
                    }
                } 
                title="search bar"
                onSearchSubmit={ApiHelper} 
                />
            <Text>{errorMessage}</Text>

            <Text>We found {yelpResults.length} results </Text>
            
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({

})
