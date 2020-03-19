import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Search from '../components/Search'
import yelp from '../api/yelp'


const SearchScreen = () => {
    const [searchText, handleSearchText] = useState('')
    const [yelpResults, setYelpResults] = useState([])

    // Axios Helper
    const ApiHelper = async () => {
        const res =  await yelp.get(`/search`, {
            //api headers here
            params: {
                term: searchText,
                limit: 10,
                location: `jersey city`
            }
        });
        console.log(res.data.businesses)
        //pass results to useState[]
        setYelpResults(
            res.data.businesses
        )

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
                onEndEditing={() => {console.log(`${searchText} RETURN`)}}
                onSearchSubmit={() => console.log(`${searchText} Was Submitted`)} 
                onSearchSubmit={ApiHelper} 
                />
            <Text>{searchText}</Text>

            <Text>We found {yelpResults.length} results </Text>
            
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({

})
