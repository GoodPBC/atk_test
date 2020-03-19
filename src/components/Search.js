import React from 'react'
import { TextInput, StyleSheet, Text, View } from 'react-native'
import Feather  from 'react-native-vector-icons/dist/FontAwesome';


const Search = ({title }) => {

    return (
        <View style={styles.searchView}>
            <Feather size={30} name="search"/>
            <Text> {title}</Text>
            
            <TextInput></TextInput>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchView: {
        backgroundColor: 'rgb(51,112,170)',
        height: 50,
        margin: 15,
        borderRadius: 5,
    }
})
