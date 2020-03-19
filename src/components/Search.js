import React from 'react'
import { TextInput, StyleSheet, Text, View } from 'react-native'
import Feather from 'react-native-vector-icons/FontAwesome';


const Search = ({ placeholder, value, onChangeText, onEndEditing, onSearchCallApi}) => {

    return (
        <View style={styles.searchBox}>
            {/* icon */}
            <Feather style={{ alignSelf: 'center', marginHorizontal: 15}}size={35} name="search"/>
            {/* Search Input */}
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                style={styles.input} 
                value={value} 
                placeholder={placeholder} 
                onChangeText={onChangeText}
                onEndEditing={onEndEditing}
                onSearchCallApi={onSearchCallApi()}
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchBox: {
        flexDirection: 'row',
        backgroundColor: 'rgb(210,210,210)',
        height: 50,
        margin: 15,
        borderRadius: 5,
        
    },
    input: {
        flex: 1,
        fontSize: 20,
    }
})
