import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Search from '../components/Search'

const SearchScreen = () => {
    const [searchText, handleSearchText] = useState('')

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
                onSearchCallApi={() => console.log(`${searchText}`)}
                />
            <Text>{searchText}</Text>
            
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({

})
