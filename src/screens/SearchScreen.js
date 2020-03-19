import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Search from '../components/Search'

const SearchScreen = () => {
    const [searchText, handleSearchText] = useState('')

    // Axios Helper
    const ApiHelper = () => {

    }

    return (
        <View>
            {/* Search Bar */}
            <Search 
                value={searchText} 
                placeholder="Search" 
                onChangeText={
                    newSearchText => {
                        handleSearchText(newSearchText)}} 
                title="search bar"
                onEndEditing={() => {console.log(`${searchText} RETURN`)}}
                onSearchSubmit={() => console.log(`${searchText} Was Submitted`)} 
                />
            <Text>{searchText}</Text>
            
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({

})
